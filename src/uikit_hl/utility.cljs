(ns uikit-hl.utility
  (:require [uikit-hl.core :as core]
            [hoplon.core :as h]
            [hoplon.jquery]
            [javelin.core :as j]))

;; UIKit Panel ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(h/defelem panel [attr kids]
  (h/div :class/uikit {:uk-panel true} attr kids))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; UIKit Inline ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defmethod hoplon.core/do! :uk-inline
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-inline v}))

(defmethod hoplon.core/do! :uk-inline-clip
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-inline-clip v}))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
