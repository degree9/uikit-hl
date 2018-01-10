(ns uikit-hl.animation
  (:require [hoplon.core :as hl]))

(def ^:dynamic *default*   nil)
(def ^:dynamic *muted*     nil)
(def ^:dynamic *primary*   nil)
(def ^:dynamic *secondary* nil)

(def ^:dynamic *cover*   nil)
(def ^:dynamic *contain* nil)

(def ^:dynamic *top-left*      nil)
(def ^:dynamic *top-center*    nil)
(def ^:dynamic *top-right*     nil)
(def ^:dynamic *center-left*   nil)
(def ^:dynamic *center-center* nil)
(def ^:dynamic *center-right*  nil)
(def ^:dynamic *bottom-left*   nil)
(def ^:dynamic *bottom-center* nil)
(def ^:dynamic *bottom-right*  nil)

(defmethod hl/do! :uk-background
  [elem _ v]
  (->> v
    (merge {:uk-background-default   *default*
            :uk-background-muted     *muted*
            :uk-background-primary   *primary*
            :uk-background-secondary *secondary*

            :uk-background-cover   *cover*
            :uk-background-contain *contain*
})
    (hl/do! elem :class )))

(defmethod hl/do! :background-default
  [elem _ v]
  (hl/do! elem :uk-background {:uk-background-default v}))

(defmethod hl/do! :background-muted
  [elem _ v]
  (hl/do! elem :uk-background {:uk-background-muted v}))

(defmethod hl/do! :background-primary
  [elem _ v]
  (hl/do! elem :uk-background {:uk-background-primary v}))

(defmethod hl/do! :background-secondary
  [elem _ v]
  (hl/do! elem :uk-background {:uk-background-secondary v}))

(defmethod hl/do! :background-cover
  [elem _ v]
  (hl/do! elem :uk-background {:uk-background-cover v}))

(defmethod hl/do! :background-contain
  [elem _ v]
  (hl/do! elem :uk-background {:uk-background-contain v}))
