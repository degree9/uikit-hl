(ns uikit-hl.width
  (:require [uikit-hl.core :as core]
            [hoplon.core :as hl]))

;; Dynamic Variables ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Width 1-1 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-1-1* nil)
(def ^:dynamic *width-1-1-s* nil)
(def ^:dynamic *width-1-1-m* nil)
(def ^:dynamic *width-1-1-l* nil)
(def ^:dynamic *width-1-1-xl* nil)
;; Width 1-2 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-1-2* nil)
(def ^:dynamic *width-1-2-s* nil)
(def ^:dynamic *width-1-2-m* nil)
(def ^:dynamic *width-1-2-l* nil)
(def ^:dynamic *width-1-2-xl* nil)
;; Width 1-3 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-1-3* nil)
(def ^:dynamic *width-1-3-s* nil)
(def ^:dynamic *width-1-3-m* nil)
(def ^:dynamic *width-1-3-l* nil)
(def ^:dynamic *width-1-3-xl* nil)
;; Width 1-4 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-1-4* nil)
(def ^:dynamic *width-1-4-s* nil)
(def ^:dynamic *width-1-4-m* nil)
(def ^:dynamic *width-1-4-l* nil)
(def ^:dynamic *width-1-4-xl* nil)
;; Width 1-5 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-1-5* nil)
(def ^:dynamic *width-1-5-s* nil)
(def ^:dynamic *width-1-5-m* nil)
(def ^:dynamic *width-1-5-l* nil)
(def ^:dynamic *width-1-5-xl* nil)
;; Width 1-6 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-1-6* nil)
(def ^:dynamic *width-1-6-s* nil)
(def ^:dynamic *width-1-6-m* nil)
(def ^:dynamic *width-1-6-l* nil)
(def ^:dynamic *width-1-6-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Width 2-3 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-2-3* nil)
(def ^:dynamic *width-2-3-s* nil)
(def ^:dynamic *width-2-3-m* nil)
(def ^:dynamic *width-2-3-l* nil)
(def ^:dynamic *width-2-3-xl* nil)
;; Width 2-4 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-2-4* nil)
(def ^:dynamic *width-2-4-s* nil)
(def ^:dynamic *width-2-4-m* nil)
(def ^:dynamic *width-2-4-l* nil)
(def ^:dynamic *width-2-4-xl* nil)
;; Width 2-5 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-2-5* nil)
(def ^:dynamic *width-2-5-s* nil)
(def ^:dynamic *width-2-5-m* nil)
(def ^:dynamic *width-2-5-l* nil)
(def ^:dynamic *width-2-5-xl* nil)
;; Width 2-6 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-2-6* nil)
(def ^:dynamic *width-2-6-s* nil)
(def ^:dynamic *width-2-6-m* nil)
(def ^:dynamic *width-2-6-l* nil)
(def ^:dynamic *width-2-6-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Width 3-4 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-3-4* nil)
(def ^:dynamic *width-3-4-s* nil)
(def ^:dynamic *width-3-4-m* nil)
(def ^:dynamic *width-3-4-l* nil)
(def ^:dynamic *width-3-4-xl* nil)
;; Width 3-5 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-3-5* nil)
(def ^:dynamic *width-3-5-s* nil)
(def ^:dynamic *width-3-5-m* nil)
(def ^:dynamic *width-3-5-l* nil)
(def ^:dynamic *width-3-5-xl* nil)
;; Width 3-6 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-3-6* nil)
(def ^:dynamic *width-3-6-s* nil)
(def ^:dynamic *width-3-6-m* nil)
(def ^:dynamic *width-3-6-l* nil)
(def ^:dynamic *width-3-6-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;; Width 4-5 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-4-5* nil)
(def ^:dynamic *width-4-5-s* nil)
(def ^:dynamic *width-4-5-m* nil)
(def ^:dynamic *width-4-5-l* nil)
(def ^:dynamic *width-4-5-xl* nil)
;; Width 4-6 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-4-6* nil)
(def ^:dynamic *width-4-6-s* nil)
(def ^:dynamic *width-4-6-m* nil)
(def ^:dynamic *width-4-6-l* nil)
(def ^:dynamic *width-4-6-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Width 5-6 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-5-6* nil)
(def ^:dynamic *width-5-6-s* nil)
(def ^:dynamic *width-5-6-m* nil)
(def ^:dynamic *width-5-6-l* nil)
(def ^:dynamic *width-5-6-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Width Auto ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-auto* nil)
(def ^:dynamic *width-auto-s* nil)
(def ^:dynamic *width-auto-m* nil)
(def ^:dynamic *width-auto-l* nil)
(def ^:dynamic *width-auto-xl* nil)
;; Width Expand ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-expand* nil)
(def ^:dynamic *width-expand-s* nil)
(def ^:dynamic *width-expand-m* nil)
(def ^:dynamic *width-expand-l* nil)
(def ^:dynamic *width-expand-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Child Width 1-1 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *child-width-1-1-s* nil)
(def ^:dynamic *child-width-1-1-m* nil)
(def ^:dynamic *child-width-1-1-l* nil)
(def ^:dynamic *child-width-1-1-xl* nil)
;; Child Width 1-2 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *child-width-1-2* nil)
(def ^:dynamic *child-width-1-2-s* nil)
(def ^:dynamic *child-width-1-2-m* nil)
(def ^:dynamic *child-width-1-2-l* nil)
(def ^:dynamic *child-width-1-2-xl* nil)
;; Child Width 1-3 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *child-width-1-3* nil)
(def ^:dynamic *child-width-1-3-s* nil)
(def ^:dynamic *child-width-1-3-m* nil)
(def ^:dynamic *child-width-1-3-l* nil)
(def ^:dynamic *child-width-1-3-xl* nil)
;; Child Width 1-4 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *child-width-1-4* nil)
(def ^:dynamic *child-width-1-4-s* nil)
(def ^:dynamic *child-width-1-4-m* nil)
(def ^:dynamic *child-width-1-4-l* nil)
(def ^:dynamic *child-width-1-4-xl* nil)
;; Child Width 1-5 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *child-width-1-5* nil)
(def ^:dynamic *child-width-1-5-s* nil)
(def ^:dynamic *child-width-1-5-m* nil)
(def ^:dynamic *child-width-1-5-l* nil)
(def ^:dynamic *child-width-1-5-xl* nil)
;; Child Width 1-6 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *child-width-1-6* nil)
(def ^:dynamic *child-width-1-6-s* nil)
(def ^:dynamic *child-width-1-6-m* nil)
(def ^:dynamic *child-width-1-6-l* nil)
(def ^:dynamic *child-width-1-6-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Child Width Auto ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *child-width-auto* nil)
(def ^:dynamic *child-width-auto-s* nil)
(def ^:dynamic *child-width-auto-m* nil)
(def ^:dynamic *child-width-auto-l* nil)
(def ^:dynamic *child-width-auto-xl* nil)
;; Child Width Expand ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *child-width-expand* nil)
(def ^:dynamic *child-width-expand-s* nil)
(def ^:dynamic *child-width-expand-m* nil)
(def ^:dynamic *child-width-expand-l* nil)
(def ^:dynamic *child-width-expand-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Width Small ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-small* nil)
(def ^:dynamic *width-small-s* nil)
(def ^:dynamic *width-small-m* nil)
(def ^:dynamic *width-small-l* nil)
(def ^:dynamic *width-small-xl* nil)
;; Width Medium ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-medium* nil)
(def ^:dynamic *width-medium-s* nil)
(def ^:dynamic *width-medium-m* nil)
(def ^:dynamic *width-medium-l* nil)
(def ^:dynamic *width-medium-xl* nil)
;; Width Large ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-large* nil)
(def ^:dynamic *width-large-s* nil)
(def ^:dynamic *width-large-m* nil)
(def ^:dynamic *width-large-l* nil)
(def ^:dynamic *width-large-xl* nil)
;; Width XLarge ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-xlarge* nil)
(def ^:dynamic *width-xlarge-s* nil)
(def ^:dynamic *width-xlarge-m* nil)
(def ^:dynamic *width-xlarge-l* nil)
(def ^:dynamic *width-xlarge-xl* nil)
;; Width XXLarge ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def ^:dynamic *width-xxlarge* nil)
(def ^:dynamic *width-xxlarge-s* nil)
(def ^:dynamic *width-xxlarge-m* nil)
(def ^:dynamic *width-xxlarge-l* nil)
(def ^:dynamic *width-xxlarge-xl* nil)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod hl/do! :uk-width
  [elem _ v]
  (->> v
    (merge {:uk-width-1-1               *width-1-1*
            (keyword "uk-width-1-1@s")  *width-1-1-s*
            (keyword "uk-width-1-1@m")  *width-1-1-m*
            (keyword "uk-width-1-1@l")  *width-1-1-l*
            (keyword "uk-width-1-1@xl") *width-1-1-xl*

            :uk-width-1-2               *width-1-2*
            (keyword "uk-width-1-2@s")  *width-1-2-s*
            (keyword "uk-width-1-2@m")  *width-1-2-m*
            (keyword "uk-width-1-2@l")  *width-1-2-l*
            (keyword "uk-width-1-2@xl") *width-1-2-xl*

            :uk-width-1-3               *width-1-3*
            (keyword "uk-width-1-3@s")  *width-1-3-s*
            (keyword "uk-width-1-3@m")  *width-1-3-m*
            (keyword "uk-width-1-3@l")  *width-1-3-l*
            (keyword "uk-width-1-3@xl") *width-1-3-xl*

            :uk-width-1-4               *width-1-4*
            (keyword "uk-width-1-4@s")  *width-1-4-s*
            (keyword "uk-width-1-4@m")  *width-1-4-m*
            (keyword "uk-width-1-4@l")  *width-1-4-l*
            (keyword "uk-width-1-4@xl") *width-1-4-xl*

            :uk-width-1-5               *width-1-5*
            (keyword "uk-width-1-5@s")  *width-1-5-s*
            (keyword "uk-width-1-5@m")  *width-1-5-m*
            (keyword "uk-width-1-5@l")  *width-1-5-l*
            (keyword "uk-width-1-5@xl") *width-1-5-xl*

            :uk-width-1-6               *width-1-6*
            (keyword "uk-width-1-6@s")  *width-1-6-s*
            (keyword "uk-width-1-6@m")  *width-1-6-m*
            (keyword "uk-width-1-6@l")  *width-1-6-l*
            (keyword "uk-width-1-6@xl") *width-1-6-xl*

            :uk-width-2-3               *width-2-3*
            (keyword "uk-width-2-3@s")  *width-2-3-s*
            (keyword "uk-width-2-3@m")  *width-2-3-m*
            (keyword "uk-width-2-3@l")  *width-2-3-l*
            (keyword "uk-width-2-3@xl") *width-2-3-xl*

            :uk-width-2-4               *width-2-4*
            (keyword "uk-width-2-4@s")  *width-2-4-s*
            (keyword "uk-width-2-4@m")  *width-2-4-m*
            (keyword "uk-width-2-4@l")  *width-2-4-l*
            (keyword "uk-width-2-4@xl") *width-2-4-xl*

            :uk-width-2-5               *width-2-5*
            (keyword "uk-width-2-5@s")  *width-2-5-s*
            (keyword "uk-width-2-5@m")  *width-2-5-m*
            (keyword "uk-width-2-5@l")  *width-2-5-l*
            (keyword "uk-width-2-5@xl") *width-2-5-xl*

            :uk-width-2-6               *width-2-6*
            (keyword "uk-width-2-6@s")  *width-2-6-s*
            (keyword "uk-width-2-6@m")  *width-2-6-m*
            (keyword "uk-width-2-6@l")  *width-2-6-l*
            (keyword "uk-width-2-6@xl") *width-2-6-xl*

            :uk-width-3-4               *width-3-4*
            (keyword "uk-width-3-4@s")  *width-3-4-s*
            (keyword "uk-width-3-4@m")  *width-3-4-m*
            (keyword "uk-width-3-4@l")  *width-3-4-l*
            (keyword "uk-width-3-4@xl") *width-3-4-xl*

            :uk-width-3-5               *width-3-5*
            (keyword "uk-width-3-5@s")  *width-3-5-s*
            (keyword "uk-width-3-5@m")  *width-3-5-m*
            (keyword "uk-width-3-5@l")  *width-3-5-l*
            (keyword "uk-width-3-5@xl") *width-3-5-xl*

            :uk-width-3-6               *width-3-6*
            (keyword "uk-width-3-6@s")  *width-3-6-s*
            (keyword "uk-width-3-6@m")  *width-3-6-m*
            (keyword "uk-width-3-6@l")  *width-3-6-l*
            (keyword "uk-width-3-6@xl") *width-3-6-xl*

            :uk-width-4-5               *width-4-5*
            (keyword "uk-width-4-5@s")  *width-4-5-s*
            (keyword "uk-width-4-5@m")  *width-4-5-m*
            (keyword "uk-width-4-5@l")  *width-4-5-l*
            (keyword "uk-width-4-5@xl") *width-4-5-xl*

            :uk-width-4-6               *width-4-6*
            (keyword "uk-width-4-6@s")  *width-4-6-s*
            (keyword "uk-width-4-6@m")  *width-4-6-m*
            (keyword "uk-width-4-6@l")  *width-4-6-l*
            (keyword "uk-width-4-6@xl") *width-4-6-xl*

            :uk-width-5-6               *width-5-6*
            (keyword "uk-width-5-6@s")  *width-5-6-s*
            (keyword "uk-width-5-6@m")  *width-5-6-m*
            (keyword "uk-width-5-6@l")  *width-5-6-l*
            (keyword "uk-width-5-6@xl") *width-5-6-xl*

            :uk-width-auto               *width-auto*
            (keyword "uk-width-auto@s")  *width-auto-s*
            (keyword "uk-width-auto@m")  *width-auto-m*
            (keyword "uk-width-auto@l")  *width-auto-l*
            (keyword "uk-width-auto@xl") *width-auto-xl*

            :uk-width-expand               *width-expand*
            (keyword "uk-width-expand@s")  *width-expand-s*
            (keyword "uk-width-expand@m")  *width-expand-m*
            (keyword "uk-width-expand@l")  *width-expand-l*
            (keyword "uk-width-expand@xl") *width-expand-xl*

            :uk-width-small               *width-small*
            (keyword "uk-width-small@s")  *width-small-s*
            (keyword "uk-width-small@m")  *width-small-m*
            (keyword "uk-width-small@l")  *width-small-l*
            (keyword "uk-width-small@xl") *width-small-xl*

            :uk-width-medium               *width-medium*
            (keyword "uk-width-medium@s")  *width-medium-s*
            (keyword "uk-width-medium@m")  *width-medium-m*
            (keyword "uk-width-medium@l")  *width-medium-l*
            (keyword "uk-width-medium@xl") *width-medium-xl*

            :uk-width-large               *width-large*
            (keyword "uk-width-large@s")  *width-large-s*
            (keyword "uk-width-large@m")  *width-large-m*
            (keyword "uk-width-large@l")  *width-large-l*
            (keyword "uk-width-large@xl") *width-large-xl*

            :uk-width-xlarge               *width-xlarge*
            (keyword "uk-width-xlarge@s")  *width-xlarge-s*
            (keyword "uk-width-xlarge@m")  *width-xlarge-m*
            (keyword "uk-width-xlarge@l")  *width-xlarge-l*
            (keyword "uk-width-xlarge@xl") *width-xlarge-xl*

            :uk-width-xxlarge               *width-xxlarge*
            (keyword "uk-width-xxlarge@s")  *width-xxlarge-s*
            (keyword "uk-width-xxlarge@m")  *width-xxlarge-m*
            (keyword "uk-width-xxlarge@l")  *width-xxlarge-l*
            (keyword "uk-width-xxlarge@xl") *width-xxlarge-xl*
        })
    (hl/do! elem :class )))

(defmethod hl/do! :uk-child-width
  [elem _ v]
  (->> v
    (merge {(keyword "uk-child-width-1-1@s")  *child-width-1-1-s*
            (keyword "uk-child-width-1-1@m")  *child-width-1-1-m*
            (keyword "uk-child-width-1-1@l")  *child-width-1-1-l*
            (keyword "uk-child-width-1-1@xl") *child-width-1-1-xl*

            :uk-child-width-1-2               *child-width-1-2*
            (keyword "uk-child-width-1-2@s")  *child-width-1-2-s*
            (keyword "uk-child-width-1-2@m")  *child-width-1-2-m*
            (keyword "uk-child-width-1-2@l")  *child-width-1-2-l*
            (keyword "uk-child-width-1-2@xl") *child-width-1-2-xl*

            :uk-child-width-1-3               *child-width-1-3*
            (keyword "uk-child-width-1-3@s")  *child-width-1-3-s*
            (keyword "uk-child-width-1-3@m")  *child-width-1-3-m*
            (keyword "uk-child-width-1-3@l")  *child-width-1-3-l*
            (keyword "uk-child-width-1-3@xl") *child-width-1-3-xl*

            :uk-child-width-1-4               *child-width-1-4*
            (keyword "uk-child-width-1-4@s")  *child-width-1-4-s*
            (keyword "uk-child-width-1-4@m")  *child-width-1-4-m*
            (keyword "uk-child-width-1-4@l")  *child-width-1-4-l*
            (keyword "uk-child-width-1-4@xl") *child-width-1-4-xl*

            :uk-child-width-1-5               *child-width-1-5*
            (keyword "uk-child-width-1-5@s")  *child-width-1-5-s*
            (keyword "uk-child-width-1-5@m")  *child-width-1-5-m*
            (keyword "uk-child-width-1-5@l")  *child-width-1-5-l*
            (keyword "uk-child-width-1-5@xl") *child-width-1-5-xl*

            :uk-child-width-1-6               *child-width-1-6*
            (keyword "uk-child-width-1-6@s")  *child-width-1-6-s*
            (keyword "uk-child-width-1-6@m")  *child-width-1-6-m*
            (keyword "uk-child-width-1-6@l")  *child-width-1-6-l*
            (keyword "uk-child-width-1-6@xl") *child-width-1-6-xl*

            :uk-child-width-auto               *child-width-auto*
            (keyword "uk-child-width-auto@s")  *child-width-auto-s*
            (keyword "uk-child-width-auto@m")  *child-width-auto-m*
            (keyword "uk-child-width-auto@l")  *child-width-auto-l*
            (keyword "uk-child-width-auto@xl") *child-width-auto-xl*

            :uk-child-width-expand               *child-width-expand*
            (keyword "uk-child-width-expand@s")  *child-width-expand-s*
            (keyword "uk-child-width-expand@m")  *child-width-expand-m*
            (keyword "uk-child-width-expand@l")  *child-width-expand-l*
            (keyword "uk-child-width-expand@xl") *child-width-expand-xl*})
    (hl/do! elem :class )))

(defmethod hoplon.core/do! :width-1-1
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-1-1 v}))

(defmethod hoplon.core/do! :width-1-1-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-1@s") v}))

(defmethod hoplon.core/do! :width-1-1-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-1@m") v}))

(defmethod hoplon.core/do! :width-1-1-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-1@l") v}))

(defmethod hoplon.core/do! :width-1-1-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-1@xl") v}))

(defmethod hoplon.core/do! :width-1-2
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-1-2 v}))

(defmethod hoplon.core/do! :width-1-2-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-2@s") v}))

(defmethod hoplon.core/do! :width-1-2-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-2@m") v}))

(defmethod hoplon.core/do! :width-1-2-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-2@l") v}))

(defmethod hoplon.core/do! :width-1-2-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-2@xl") v}))

(defmethod hoplon.core/do! :width-1-3
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-1-3 v}))

(defmethod hoplon.core/do! :width-1-3-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-3@s") v}))

(defmethod hoplon.core/do! :width-1-3-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-3@m") v}))

(defmethod hoplon.core/do! :width-1-3-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-3@l") v}))

(defmethod hoplon.core/do! :width-1-3-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-3@xl") v}))

(defmethod hoplon.core/do! :width-1-4
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-1-4 v}))

(defmethod hoplon.core/do! :width-1-4-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-4@s") v}))

(defmethod hoplon.core/do! :width-1-4-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-4@m") v}))

(defmethod hoplon.core/do! :width-1-4-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-4@l") v}))

(defmethod hoplon.core/do! :width-1-4-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-4@xl") v}))

(defmethod hoplon.core/do! :width-1-5
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-1-5 v}))

(defmethod hoplon.core/do! :width-1-5-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-5@s") v}))

(defmethod hoplon.core/do! :width-1-5-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-5@m") v}))

(defmethod hoplon.core/do! :width-1-5-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-5@l") v}))

(defmethod hoplon.core/do! :width-1-5-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-5@xl") v}))

(defmethod hoplon.core/do! :width-1-6
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-1-6 v}))

(defmethod hoplon.core/do! :width-1-6-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-6@s") v}))

(defmethod hoplon.core/do! :width-1-6-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-6@m") v}))

(defmethod hoplon.core/do! :width-1-6-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-6@l") v}))

(defmethod hoplon.core/do! :width-1-6-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-1-6@xl") v}))

(defmethod hoplon.core/do! :width-2-3
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-2-3 v}))

(defmethod hoplon.core/do! :width-2-3-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-3@s") v}))

(defmethod hoplon.core/do! :width-2-3-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-3@m") v}))

(defmethod hoplon.core/do! :width-2-3-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-3@l") v}))

(defmethod hoplon.core/do! :width-2-3-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-3@xl") v}))

(defmethod hoplon.core/do! :width-2-4
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-2-4 v}))

(defmethod hoplon.core/do! :width-2-4-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-4@s") v}))

(defmethod hoplon.core/do! :width-2-4-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-4@m") v}))

(defmethod hoplon.core/do! :width-2-4-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-4@l") v}))

(defmethod hoplon.core/do! :width-2-4-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-4@xl") v}))

(defmethod hoplon.core/do! :width-2-5
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-2-5 v}))

(defmethod hoplon.core/do! :width-2-5-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-5@s") v}))

(defmethod hoplon.core/do! :width-2-5-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-5@m") v}))

(defmethod hoplon.core/do! :width-2-5-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-5@l") v}))

(defmethod hoplon.core/do! :width-2-5-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-5@xl") v}))

(defmethod hoplon.core/do! :width-2-6
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-2-6 v}))

(defmethod hoplon.core/do! :width-2-6-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-6@s") v}))

(defmethod hoplon.core/do! :width-2-6-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-6@m") v}))

(defmethod hoplon.core/do! :width-2-6-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-6@l") v}))

(defmethod hoplon.core/do! :width-2-6-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-2-6@xl") v}))

(defmethod hoplon.core/do! :width-3-4
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-3-4 v}))

(defmethod hoplon.core/do! :width-3-4-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-4@s") v}))

(defmethod hoplon.core/do! :width-3-4-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-4@m") v}))

(defmethod hoplon.core/do! :width-3-4-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-4@l") v}))

(defmethod hoplon.core/do! :width-3-4-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-4@xl") v}))

(defmethod hoplon.core/do! :width-3-5
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-3-5 v}))

(defmethod hoplon.core/do! :width-3-5-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-5@s") v}))

(defmethod hoplon.core/do! :width-3-5-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-5@m") v}))

(defmethod hoplon.core/do! :width-3-5-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-5@l") v}))

(defmethod hoplon.core/do! :width-3-5-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-5@xl") v}))

(defmethod hoplon.core/do! :width-3-6
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-3-6 v}))

(defmethod hoplon.core/do! :width-3-6-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-6@s") v}))

(defmethod hoplon.core/do! :width-3-6-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-6@m") v}))

(defmethod hoplon.core/do! :width-3-6-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-6@l") v}))

(defmethod hoplon.core/do! :width-3-6-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-3-6@xl") v}))

(defmethod hoplon.core/do! :width-4-5
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-4-5 v}))

(defmethod hoplon.core/do! :width-4-5-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-4-5@s") v}))

(defmethod hoplon.core/do! :width-4-5-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-4-5@m") v}))

(defmethod hoplon.core/do! :width-4-5-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-4-5@l") v}))

(defmethod hoplon.core/do! :width-4-5-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-4-5@xl") v}))

(defmethod hoplon.core/do! :width-auto
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-auto v}))

(defmethod hoplon.core/do! :width-auto-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-auto@s") v}))

(defmethod hoplon.core/do! :width-auto-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-auto@m") v}))

(defmethod hoplon.core/do! :width-auto-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-auto@l") v}))

(defmethod hoplon.core/do! :width-auto-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-auto@xl") v}))

(defmethod hoplon.core/do! :width-5-6
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-5-6 v}))

(defmethod hoplon.core/do! :width-5-6-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-5-6@s") v}))

(defmethod hoplon.core/do! :width-5-6-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-5-6@m") v}))

(defmethod hoplon.core/do! :width-5-6-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-5-6@l") v}))

(defmethod hoplon.core/do! :width-5-6-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-5-6@xl") v}))

(defmethod hoplon.core/do! :width-4-6
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-4-6 v}))

(defmethod hoplon.core/do! :width-4-6-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-4-6@s") v}))

(defmethod hoplon.core/do! :width-4-6-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-4-6@m") v}))

(defmethod hoplon.core/do! :width-4-6-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-4-6@l") v}))

(defmethod hoplon.core/do! :width-4-6-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-4-6@xl") v}))

(defmethod hoplon.core/do! :width-expand
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-expand v}))

(defmethod hoplon.core/do! :width-expand-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-expand@s") v}))

(defmethod hoplon.core/do! :width-expand-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-expand@m") v}))

(defmethod hoplon.core/do! :width-expand-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-expand@l") v}))

(defmethod hoplon.core/do! :width-expand-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-expand@xl") v}))

(defmethod hoplon.core/do! :child-width-1-1-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-1@s") v}))

(defmethod hoplon.core/do! :child-width-1-1-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-1@m") v}))

(defmethod hoplon.core/do! :child-width-1-1-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-1@l") v}))

(defmethod hoplon.core/do! :child-width-1-1-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-1@xl") v}))

(defmethod hoplon.core/do! :child-width-1-2
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-child-width-1-2 v}))

(defmethod hoplon.core/do! :child-width-1-2-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-2@s") v}))

(defmethod hoplon.core/do! :child-width-1-2-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-2@m") v}))

(defmethod hoplon.core/do! :child-width-1-2-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-2@l") v}))

(defmethod hoplon.core/do! :child-width-1-2-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-2@xl") v}))

(defmethod hoplon.core/do! :child-width-1-3
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-child-width-1-3 v}))

(defmethod hoplon.core/do! :child-width-1-3-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-3@s") v}))

(defmethod hoplon.core/do! :child-width-1-3-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-3@m") v}))

(defmethod hoplon.core/do! :child-width-1-3-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-3@l") v}))

(defmethod hoplon.core/do! :child-width-1-3-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-3@xl") v}))

(defmethod hoplon.core/do! :child-width-1-4
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-child-width-1-4 v}))

(defmethod hoplon.core/do! :child-width-1-4-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-4@s") v}))

(defmethod hoplon.core/do! :child-width-1-4-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-4@m") v}))

(defmethod hoplon.core/do! :child-width-1-4-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-4@l") v}))

(defmethod hoplon.core/do! :child-width-1-4-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-4@xl") v}))

(defmethod hoplon.core/do! :child-width-1-5
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-child-width-1-5 v}))

(defmethod hoplon.core/do! :child-width-1-5-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-5@s") v}))

(defmethod hoplon.core/do! :child-width-1-5-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-5@m") v}))

(defmethod hoplon.core/do! :child-width-1-5-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-5@l") v}))

(defmethod hoplon.core/do! :child-width-1-5-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-5@xl") v}))

(defmethod hoplon.core/do! :child-width-1-6
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-child-width-1-6 v}))

(defmethod hoplon.core/do! :child-width-1-6-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-6@s") v}))

(defmethod hoplon.core/do! :child-width-1-6-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-6@m") v}))

(defmethod hoplon.core/do! :child-width-1-6-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-6@l") v}))

(defmethod hoplon.core/do! :child-width-1-6-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-1-6@xl") v}))

(defmethod hoplon.core/do! :child-width-auto
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-child-width-auto v}))

(defmethod hoplon.core/do! :child-width-auto-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-auto@s") v}))

(defmethod hoplon.core/do! :child-width-auto-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-auto@m") v}))

(defmethod hoplon.core/do! :child-width-auto-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-auto@l") v}))

(defmethod hoplon.core/do! :child-width-auto-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-auto@xl") v}))

(defmethod hoplon.core/do! :child-width-expand
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-child-width-expand v}))

(defmethod hoplon.core/do! :child-width-expand-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-expand@s") v}))

(defmethod hoplon.core/do! :child-width-expand-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-expand@m") v}))

(defmethod hoplon.core/do! :child-width-expand-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-expand@l") v}))

(defmethod hoplon.core/do! :child-width-expand-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-child-width-expand@xl") v}))

(defmethod hoplon.core/do! :width-small
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-small v}))

(defmethod hoplon.core/do! :width-small-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-small@s") v}))

(defmethod hoplon.core/do! :width-small-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-small@m") v}))

(defmethod hoplon.core/do! :width-small-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-small@l") v}))

(defmethod hoplon.core/do! :width-small-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-small@xl") v}))

(defmethod hoplon.core/do! :width-medium
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-medium v}))

(defmethod hoplon.core/do! :width-medium-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-medium@s") v}))

(defmethod hoplon.core/do! :width-medium-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-medium@m") v}))

(defmethod hoplon.core/do! :width-medium-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-medium@l") v}))

(defmethod hoplon.core/do! :width-medium-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-medium@xl") v}))

(defmethod hoplon.core/do! :width-large
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-large v}))

(defmethod hoplon.core/do! :width-large-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-large@s") v}))

(defmethod hoplon.core/do! :width-large-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-large@m") v}))

(defmethod hoplon.core/do! :width-large-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-large@l") v}))

(defmethod hoplon.core/do! :width-large-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-large@xl") v}))

(defmethod hoplon.core/do! :width-xlarge
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-xlarge v}))

(defmethod hoplon.core/do! :width-xlarge-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-xlarge@s") v}))

(defmethod hoplon.core/do! :width-xlarge-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-xlarge@m") v}))

(defmethod hoplon.core/do! :width-xlarge-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-xlarge@l") v}))

(defmethod hoplon.core/do! :width-xlarge-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-xlarge@xl") v}))

(defmethod hoplon.core/do! :width-xxlarge
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-width-xxlarge v}))

(defmethod hoplon.core/do! :width-xxlarge-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-xxlarge@s") v}))

(defmethod hoplon.core/do! :width-xxlarge-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-xxlarge@m") v}))

(defmethod hoplon.core/do! :width-xxlarge-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-xxlarge@l") v}))

(defmethod hoplon.core/do! :width-xxlarge-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-width-xxlarge@xl") v}))
