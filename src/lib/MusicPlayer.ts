/**
 * MUSIC PLAYER CLASS - OOP Implementation for Sleep Token Argentina Fan Page
 *
 * This class handles all music player functionality across all pages
 */
class MusicPlayer {
  isPlaying: boolean
  currentSong: null
  currentAlbum: null
  volume: number
  currentTime: number
  duration: number
  playlist: Array<unknown>
  currentIndex: number

  playerElement: HTMLElement | null
  playPauseBtn: HTMLButtonElement | null
  prevBtn: HTMLButtonElement | null
  nextBtn: HTMLButtonElement | null
  progressBar: HTMLElement | null
  currentTimeElement: HTMLSpanElement | null
  totalTimeElement: HTMLSpanElement | null
  currentSongElement: HTMLElement | null
  currentArtistElement: HTMLElement | null
  volumeBtn: HTMLButtonElement | null

  constructor() {
    // Player state
    this.isPlaying = false
    this.currentSong = null
    this.currentAlbum = null
    this.volume = 1.0
    this.currentTime = 0
    this.duration = 0
    this.playlist = []
    this.currentIndex = 0

    // DOM elements
    this.playerElement = null
    this.playPauseBtn = null
    this.prevBtn = null
    this.nextBtn = null
    this.progressBar = null
    this.currentTimeElement = null
    this.totalTimeElement = null
    this.currentSongElement = null
    this.currentArtistElement = null
    this.volumeBtn = null

    // Initialize player
    this.init()
  }

  /**
   * Initialize the music player
   */
  init() {
    this.playerElement = document.getElementById('musicPlayer')
    if (!this.playerElement) return

    // Get DOM elements
    this.playPauseBtn = document.getElementById('playPauseBtn')
    this.prevBtn = document.getElementById('prevBtn')
    this.nextBtn = document.getElementById('nextBtn')
    this.progressBar = document.getElementById('progressBar')
    this.currentTimeElement = document.getElementById('currentTime')
    this.totalTimeElement = document.getElementById('totalTime')
    this.currentSongElement = document.getElementById('currentSong')
    this.currentArtistElement = document.getElementById('currentArtist')
    this.volumeBtn = document.getElementById('volumeBtn')

    // Bind event listeners
    this.bindEvents()

    // Load default playlist
    this.loadDefaultPlaylist()
  }

  /**
   * Bind event listeners to player controls
   */
  bindEvents() {
    if (this.playPauseBtn) {
      this.playPauseBtn.addEventListener('click', () => this.togglePlayPause())
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.previousSong())
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSong())
    }

    if (this.volumeBtn) {
      this.volumeBtn.addEventListener('click', () => this.toggleMute())
    }

    // Progress bar click handling
    if (this.progressBar && this.progressBar.parentElement) {
      this.progressBar.parentElement.addEventListener('click', e => {
        this.seekTo(e)
      })
    }
  }

  /**
   *  Load default Sleep Token playlist
   */
  loadDefaultPlaylist() {
    this.playlist = [
      {
        title: 'Anima',
        artist: 'Sleep Token',
        album: 'Even In Arcadia',
        duration: 225, // 3:45 in seconds
      },
      {
        title: 'Levitate',
        artist: 'Sleep Token',
        album: 'Even In Arcadia',
        duration: 252, // 4:12 in seconds
      },
      {
        title: 'Distraction',
        artist: 'Sleep Token',
        album: 'Even In Arcadia',
        duration: 208, // 3:28 in seconds
      },
      {
        title: 'Ascensionism',
        artist: 'Sleep Token',
        album: 'Even In Arcadia',
        duration: 301, // 5:01 in seconds
      },
      {
        title: 'Chokehold',
        artist: 'Sleep Token',
        album: 'Take Me Back to Eden',
        duration: 234,
      },
      {
        title: 'The Summoning',
        artist: 'Sleep Token',
        album: 'Take Me Back to Eden',
        duration: 387,
      },
    ]
  }

  /**
   * Play a specific song
   * @param {string} songTitle - Song title
   * @param {string | null} albumName - Album name (optional)
   */
  playSong(songTitle: string, albumName: string | null = null) {
    // Find song in playlist
    const songIndex = this.playlist.findIndex(
      song => song.title.toLowerCase() === songTitle.toLowerCase(),
    )

    if (songIndex !== -1) {
      this.currentIndex = songIndex
      this.currentSong = this.playlist[songIndex]
      this.currentAlbum = albumName || this.currentSong.album
      this.duration = this.currentSong.duration

      // Update UI
      this.updateSongInfo()
      this.showPlayer()
      this.play()
    }
  }

  /**
   * Toggle play/pause
   */
  togglePlayPause() {
    if (this.isPlaying) {
      this.pause()
    } else {
      this.play()
    }
  }

  /**
   * Play current song
   */
  play() {
    if (!this.currentSong) {
      // Play first song in playlist if none selected
      this.currentIndex = 0
      this.currentSong = this.playlist[0]
      this.duration = this.currentSong.duration
      this.updateSongInfo()
    }

    this.isPlaying = true
    this.updatePlayButton()
    this.showPlayer()
    this.startProgressUpdate()
  }

  /**
   * Pause current song
   */
  pause() {
    this.isPlaying = false
    this.updatePlayButton()
    this.stopProgressUpdate()
  }

  /**
   * Play previous song
   */
  previousSong() {
    if (this.currentIndex > 0) {
      this.currentIndex--
    } else {
      this.currentIndex = this.playlist.length - 1
    }

    this.currentSong = this.playlist[this.currentIndex]
    this.duration = this.currentSong.duration
    this.currentTime = 0
    this.updateSongInfo()

    if (this.isPlaying) {
      this.play()
    }
  }

  /**
   * Play next song
   */
  nextSong() {
    if (this.currentIndex < this.playlist.length - 1) {
      this.currentIndex++
    } else {
      this.currentIndex = 0
    }

    this.currentSong = this.playlist[this.currentIndex]
    this.duration = this.currentSong.duration
    this.currentTime = 0
    this.updateSongInfo()

    if (this.isPlaying) {
      this.play()
    }
  }

  /**
   * Seek to specific time
   * @param {MouseEvent | TouchEvent} event - Mouse or touch event
   */
  seekTo(event: MouseEvent | TouchEvent) {
    const progressContainer = this.progressBar.parentElement
    const rect = progressContainer.getBoundingClientRect()
    const clickX = event.clientX - rect.left
    const percentage = clickX / rect.width

    this.currentTime = percentage * this.duration
    this.updateProgress()
  }

  /**
   * Toggle mute
   */
  toggleMute() {
    if (this.volume > 0) {
      this.volume = 0
      this.volumeBtn.textContent = '🔇'
    } else {
      this.volume = 1.0
      this.volumeBtn.textContent = '🔊'
    }
  }

  /**
   * Update song information in UI
   */
  updateSongInfo() {
    if (this.currentSongElement && this.currentSong) {
      this.currentSongElement.textContent = this.currentSong.title
    }

    if (this.currentArtistElement && this.currentSong) {
      this.currentArtistElement.textContent = this.currentSong.artist
    }

    if (this.totalTimeElement) {
      this.totalTimeElement.textContent = this.formatTime(this.duration)
    }
  }

  /**
   * Update play/pause button
   */
  updatePlayButton() {
    if (this.playPauseBtn) {
      this.playPauseBtn.textContent = this.isPlaying ? '⏸' : '▶'
    }
  }

  /**
   * Show player
   */
  showPlayer() {
    if (this.playerElement) {
      this.playerElement.style.transform = 'translateY(0)'
    }
  }

  /**
   * Hide player
   */
  hidePlayer() {
    if (this.playerElement) {
      this.playerElement.style.transform = 'translateY(100%)'
    }
  }

  /**
   * Start progress update interval
   */
  startProgressUpdate() {
    this.stopProgressUpdate() // Clear any existing interval

    this.progressInterval = setInterval(() => {
      if (this.isPlaying && this.currentTime < this.duration) {
        this.currentTime += 1
        this.updateProgress()

        // Auto-play next song when current ends
        if (this.currentTime >= this.duration) {
          this.nextSong()
        }
      }
    }, 1000)
  }

  /**
   * Stop progress update interval
   */
  stopProgressUpdate() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval)
      this.progressInterval = null
    }
  }

  /**
   * Update progress bar and time display
   */
  updateProgress() {
    const percentage = (this.currentTime / this.duration) * 100

    if (this.progressBar) {
      this.progressBar.style.width = `${percentage}%`
    }

    if (this.currentTimeElement) {
      this.currentTimeElement.textContent = this.formatTime(this.currentTime)
    }
  }

  /**
   * Format time in MM:SS format
   * @param seconds - Time in seconds
   * @returns {`${number}:${number}`} - Formatted time
   */
  formatTime(seconds: number): `${number}:${number}` {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  /**
   * Get current playing song
   * @returns {Song | null} - Current song object
   */
  getCurrentSong(): Song | null {
    return this.currentSong
  }

  /**
   * Get playlist
   * @returns {Playlist} - Playlist array
   */
  getPlaylist(): Playlist {
    return this.playlist
  }

  /**
   * Add song to playlist
   * @param song - Song object
   * @returns {void}
   */
  addToPlaylist(song: Song): void {
    this.playlist.push(song)
  }

  /**
   * Remove song from playlist
   * @param {number} index
   */
  removeFromPlaylist(index: number): void {
    if (index >= 0 && index < this.playlist.length) {
      this.playlist.splice(index, 1)

      // Adjust current index if necessary
      if (this.currentIndex >= index && this.currentIndex > 0) {
        this.currentIndex--
      }
    }
  }

  /**
   * Set volume (0.0 to 1.0)
   * @param volume - Volume level
   */
  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume))

    if (this.volume === 0) {
      this.volumeBtn.textContent = '🔇'
    } else {
      this.volumeBtn.textContent = '🔊'
    }
  }

  /**
   * Destroy player instance
   */
  destroy() {
    this.stopProgressUpdate()
    this.hidePlayer()

    // Remove event listeners
    if (this.playPauseBtn) {
      this.playPauseBtn.removeEventListener('click', this.togglePlayPause)
    }

    // Reset state
    this.isPlaying = false
    this.currentSong = null
    this.currentAlbum = null
    this.playlist = []
  }
}

export { MusicPlayer }
export default MusicPlayer
