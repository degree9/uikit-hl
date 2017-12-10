(ns uikit-hl.animation
  (:require [hoplon.core :as hl]))

(def ^:dynamic *fade* nil)

(def ^:dynamic *scale-up*   nil)
(def ^:dynamic *scale-down* nil)

(def ^:dynamic *slide-top*    nil)
(def ^:dynamic *slide-bottom* nil)
(def ^:dynamic *slide-left*   nil)
(def ^:dynamic *slide-right*  nil)

(def ^:dynamic *slide-top-small*    nil)
(def ^:dynamic *slide-bottom-small* nil)
(def ^:dynamic *slide-left-small*   nil)
(def ^:dynamic *slide-right-small*  nil)

(def ^:dynamic *slide-top-medium*    nil)
(def ^:dynamic *slide-bottom-medium* nil)
(def ^:dynamic *slide-left-medium*   nil)
(def ^:dynamic *slide-right-medium*  nil)

(def ^:dynamic *kenburns* nil)

(def ^:dynamic *shake* nil)

(defmethod hl/do! :uk-animation
  [elem _ v]
  (->> v
    (merge {:uk-animation-fade *fade*

            :uk-animation-scale-up   *scale-up*
            :uk-animation-scale-down *scale-down*

            :uk-animation-slide-top    *slide-top*
            :uk-animation-slide-bottom *slide-bottom*
            :uk-animation-slide-left   *slide-left*
            :uk-animation-slide-right  *slide-right*

            :uk-animation-slide-top-small    *slide-top-small*
            :uk-animation-slide-bottom-small *slide-bottom-small*
            :uk-animation-slide-left-small   *slide-left-small*
            :uk-animation-slide-right-small  *slide-right-small*

            :uk-animation-slide-top-medium    *slide-top-medium*
            :uk-animation-slide-bottom-medium *slide-bottom-medium*
            :uk-animation-slide-left-medium   *slide-left-medium*
            :uk-animation-slide-right-medium  *slide-right-medium*

            :uk-animation-kenburns *kenburns*

            :uk-animation-shake *shake*})
    (hl/do! elem :class )))

(defmethod hl/do! :animation-fade
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-fade v}))

(defmethod hl/do! :animation-scale-up
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-scale-up v}))

(defmethod hl/do! :animation-scale-down
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-scale-down v}))

(defmethod hl/do! :animation-slide-top
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-top v}))

(defmethod hl/do! :animation-slide-bottom
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-bottom v}))

(defmethod hl/do! :animation-slide-left
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-left v}))

(defmethod hl/do! :animation-slide-right
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-right v}))

(defmethod hl/do! :animation-slide-top-small
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-top-small v}))

(defmethod hl/do! :animation-slide-bottom-small
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-bottom-small v}))

(defmethod hl/do! :animation-slide-left-small
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-left-small v}))

(defmethod hl/do! :animation-slide-right-small
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-right-small v}))

(defmethod hl/do! :animation-slide-top-medium
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-top-medium v}))

(defmethod hl/do! :animation-slide-bottom-medium
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-bottom-medium v}))

(defmethod hl/do! :animation-slide-left-medium
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-left-medium v}))

(defmethod hl/do! :animation-slide-right-medium
  [elem _ v]
  (hl/do! elem :uk-animation {:uk-animation-slide-right-medium v}))
