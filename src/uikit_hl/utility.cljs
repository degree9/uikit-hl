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

;; UIKit Height ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *height-1-1* nil)

(def ^:dynamic *height-small* nil)
(def ^:dynamic *height-medium* nil)
(def ^:dynamic *height-large* nil)

(def ^:dynamic *height-max-small* nil)
(def ^:dynamic *height-max-medium* nil)
(def ^:dynamic *height-max-large* nil)

(defmethod h/do! :uk-height
  [elem _ v]
  (->> v
    (merge {:uk-height-1-1    *height-1-1*
            :uk-height-small  *height-small*
            :uk-height-medium *height-medium*
            :uk-height-large  *height-large*

            :uk-height-max-small  *height-max-small*
            :uk-height-max-medium *height-max-medium*
            :uk-height-max-large  *height-max-large*})


    (h/do! elem :class)))

(defmethod hoplon.core/do! :height-1-1
  [elem kw v]
  (hoplon.core/do! elem :uk-height
    {:uk-height-1-1 v}))

(defmethod hoplon.core/do! :height-small
  [elem kw v]
  (hoplon.core/do! elem :uk-height
    {:uk-height-small v}))

(defmethod hoplon.core/do! :height-medium
  [elem kw v]
  (hoplon.core/do! elem :uk-height
    {:uk-height-medium v}))

(defmethod hoplon.core/do! :height-large
  [elem kw v]
  (hoplon.core/do! elem :uk-height
    {:uk-height-large v}))

(defmethod hoplon.core/do! :height-max-small
  [elem kw v]
  (hoplon.core/do! elem :uk-height
    {:uk-height-max-small v}))

(defmethod hoplon.core/do! :height-max-medium
  [elem kw v]
  (hoplon.core/do! elem :uk-height
    {:uk-height-max-medium v}))

(defmethod hoplon.core/do! :height-max-large
  [elem kw v]
  (hoplon.core/do! elem :uk-height
    {:uk-height-max-large v}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; UIKit Viewport Height ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ^:dynamic *uk-height-viewport* "")

(h/defelem height-viewport [attr kids]
  (let [height-viewport (:uk-height-viewport attr *uk-height-viewport*)
        attr (assoc attr :uk-height-viewport height-viewport)]
    (h/div attr kids)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; UIKit Height Match ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;(defmethod hoplon.core/do! :uk-height-match
;  [elem kw v]
;  (hoplon.core/do! elem :attr {:uk-height-match (.stringify js/JSON (clj->js v))}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
