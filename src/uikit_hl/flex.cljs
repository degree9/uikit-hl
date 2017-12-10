(ns uikit-hl.flex
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-flex*        nil)
(def ^:dynamic *uk-flex-inline* nil)

(def ^:dynamic *uk-flex-left*    nil)
(def ^:dynamic *uk-flex-left-s*  nil)
(def ^:dynamic *uk-flex-left-m*  nil)
(def ^:dynamic *uk-flex-left-l*  nil)
(def ^:dynamic *uk-flex-left-xl* nil)

(def ^:dynamic *uk-flex-center*    nil)
(def ^:dynamic *uk-flex-center-s*  nil)
(def ^:dynamic *uk-flex-center-m*  nil)
(def ^:dynamic *uk-flex-center-l*  nil)
(def ^:dynamic *uk-flex-center-xl* nil)

(def ^:dynamic *uk-flex-right*    nil)
(def ^:dynamic *uk-flex-right-s*  nil)
(def ^:dynamic *uk-flex-right-m*  nil)
(def ^:dynamic *uk-flex-right-l*  nil)
(def ^:dynamic *uk-flex-right-xl* nil)

(def ^:dynamic *uk-flex-between*    nil)
(def ^:dynamic *uk-flex-between-s*  nil)
(def ^:dynamic *uk-flex-between-m*  nil)
(def ^:dynamic *uk-flex-between-l*  nil)
(def ^:dynamic *uk-flex-between-xl* nil)

(def ^:dynamic *uk-flex-around*    nil)
(def ^:dynamic *uk-flex-around-s*  nil)
(def ^:dynamic *uk-flex-around-m*  nil)
(def ^:dynamic *uk-flex-around-l*  nil)
(def ^:dynamic *uk-flex-around-xl* nil)

(def ^:dynamic *uk-flex-stretch* nil)
(def ^:dynamic *uk-flex-top*     nil)
(def ^:dynamic *uk-flex-middle*  nil)
(def ^:dynamic *uk-flex-bottom*  nil)

(def ^:dynamic *uk-flex-row*            nil)
(def ^:dynamic *uk-flex-row-reverse*    nil)
(def ^:dynamic *uk-flex-column*         nil)
(def ^:dynamic *uk-flex-column-reverse* nil)

(def ^:dynamic *uk-flex-wrap*            nil)
(def ^:dynamic *uk-flex-wrap-reverse*    nil)
(def ^:dynamic *uk-flex-nowrap*          nil)

(def ^:dynamic *uk-flex-wrap-stretch* nil)
(def ^:dynamic *uk-flex-wrap-between* nil)
(def ^:dynamic *uk-flex-wrap-around*  nil)
(def ^:dynamic *uk-flex-wrap-top*     nil)
(def ^:dynamic *uk-flex-wrap-middle*  nil)
(def ^:dynamic *uk-flex-wrap-bottom*  nil)

(def ^:dynamic *uk-flex-first*    nil)
(def ^:dynamic *uk-flex-first-s*  nil)
(def ^:dynamic *uk-flex-first-m*  nil)
(def ^:dynamic *uk-flex-first-l*  nil)
(def ^:dynamic *uk-flex-first-xl* nil)

(def ^:dynamic *uk-flex-last*    nil)
(def ^:dynamic *uk-flex-last-s*  nil)
(def ^:dynamic *uk-flex-last-m*  nil)
(def ^:dynamic *uk-flex-last-l*  nil)
(def ^:dynamic *uk-flex-last-xl* nil)

(def ^:dynamic *uk-flex-none* nil)
(def ^:dynamic *uk-flex-auto* nil)
(def ^:dynamic *uk-flex-1*    nil)

(defmethod hl/do! :uk-flex
  [elem _ v]
  (->> v
    (merge {:uk-flex        *uk-flex*
            :uk-flex-inline *uk-flex-inline*

            :uk-flex-left               *uk-flex-left*
            (keyword "uk-flex-left@s")  *uk-flex-left-s*
            (keyword "uk-flex-left@m")  *uk-flex-left-m*
            (keyword "uk-flex-left@l")  *uk-flex-left-l*
            (keyword "uk-flex-left@xl") *uk-flex-left-xl*

            :uk-flex-center               *uk-flex-center*
            (keyword "uk-flex-center@s")  *uk-flex-center-s*
            (keyword "uk-flex-center@m")  *uk-flex-center-m*
            (keyword "uk-flex-center@l")  *uk-flex-center-l*
            (keyword "uk-flex-center@xl") *uk-flex-center-xl*

            :uk-flex-right               *uk-flex-right*
            (keyword "uk-flex-right@s")  *uk-flex-right-s*
            (keyword "uk-flex-right@m")  *uk-flex-right-m*
            (keyword "uk-flex-right@l")  *uk-flex-right-l*
            (keyword "uk-flex-right@xl") *uk-flex-right-xl*

            :uk-flex-between               *uk-flex-between*
            (keyword "uk-flex-between@s")  *uk-flex-between-s*
            (keyword "uk-flex-between@m")  *uk-flex-between-m*
            (keyword "uk-flex-between@l")  *uk-flex-between-l*
            (keyword "uk-flex-between@xl") *uk-flex-between-xl*

            :uk-flex-around               *uk-flex-around*
            (keyword "uk-flex-around@s")  *uk-flex-around-s*
            (keyword "uk-flex-around@m")  *uk-flex-around-m*
            (keyword "uk-flex-around@l")  *uk-flex-around-l*
            (keyword "uk-flex-around@xl") *uk-flex-around-xl*

            :uk-flex-stretch *uk-flex-stretch*
            :uk-flex-top     *uk-flex-top*
            :uk-flex-middle  *uk-flex-middle*
            :uk-flex-bottom  *uk-flex-bottom*

            :uk-flex-row            *uk-flex-row*
            :uk-flex-row-reverse    *uk-flex-row-reverse*
            :uk-flex-column         *uk-flex-column*
            :uk-flex-column-reverse *uk-flex-column-reverse*

            :uk-flex-wrap         *uk-flex-wrap*
            :uk-flex-wrap-reverse *uk-flex-wrap-reverse*
            :uk-flex-nowrap       *uk-flex-nowrap*

            :uk-flex-wrap-stretch *uk-flex-stretch*
            :uk-flex-wrap-between *uk-flex-between*
            :uk-flex-wrap-around  *uk-flex-around*
            :uk-flex-wrap-top     *uk-flex-top*
            :uk-flex-wrap-middle  *uk-flex-middle*
            :uk-flex-wrap-bottom  *uk-flex-bottom*

            :uk-flex-first               *uk-flex-first*
            (keyword "uk-flex-first@s")  *uk-flex-first-s*
            (keyword "uk-flex-first@m")  *uk-flex-first-m*
            (keyword "uk-flex-first@l")  *uk-flex-first-l*
            (keyword "uk-flex-first@xl") *uk-flex-first-xl*

            :uk-flex-last               *uk-flex-last*
            (keyword "uk-flex-last@s")  *uk-flex-last-s*
            (keyword "uk-flex-last@m")  *uk-flex-last-m*
            (keyword "uk-flex-last@l")  *uk-flex-last-l*
            (keyword "uk-flex-last@xl") *uk-flex-last-xl*

            :uk-flex-none *uk-flex-none*
            :uk-flex-auto *uk-flex-auto*
            :uk-flex-1    *uk-flex-1*})
    (hl/do! elem :class )))

(defmethod hoplon.core/do! :flex
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex v}))

(defmethod hoplon.core/do! :flex-inline
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex (not v) :uk-flex-inline v}))

(defmethod hoplon.core/do! :flex-left
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-left v}))

(defmethod hoplon.core/do! :flex-left-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-left@s") v}))

(defmethod hoplon.core/do! :flex-left-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-left@m") v}))

(defmethod hoplon.core/do! :flex-left-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-left@l") v}))

(defmethod hoplon.core/do! :flex-left-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-left@xl") v}))

(defmethod hoplon.core/do! :flex-center
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-center v}))

(defmethod hoplon.core/do! :flex-center-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-center@s") v}))

(defmethod hoplon.core/do! :flex-center-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-center@m") v}))

(defmethod hoplon.core/do! :flex-center-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-center@l") v}))

(defmethod hoplon.core/do! :flex-center-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-center@xl") v}))

(defmethod hoplon.core/do! :flex-right
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-right v}))

(defmethod hoplon.core/do! :flex-right-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-right@s") v}))

(defmethod hoplon.core/do! :flex-right-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-right@m") v}))

(defmethod hoplon.core/do! :flex-right-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-right@l") v}))

(defmethod hoplon.core/do! :flex-right-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-right@xl") v}))

(defmethod hoplon.core/do! :flex-between
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-between v}))

(defmethod hoplon.core/do! :flex-between-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-between@s") v}))

(defmethod hoplon.core/do! :flex-between-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-between@m") v}))

(defmethod hoplon.core/do! :flex-between-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-between@l") v}))

(defmethod hoplon.core/do! :flex-between-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-between@xl") v}))

(defmethod hoplon.core/do! :flex-around
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-around v}))

(defmethod hoplon.core/do! :flex-around-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-around@s") v}))

(defmethod hoplon.core/do! :flex-around-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-around@m") v}))

(defmethod hoplon.core/do! :flex-around-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-around@l") v}))

(defmethod hoplon.core/do! :flex-around-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-around@xl") v}))

(defmethod hoplon.core/do! :flex-stretch
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-stretch v}))

(defmethod hoplon.core/do! :flex-top
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-top v}))

(defmethod hoplon.core/do! :flex-middle
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-middle v}))

(defmethod hoplon.core/do! :flex-bottom
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-bottom v}))

(defmethod hoplon.core/do! :flex-row
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-row v}))

(defmethod hoplon.core/do! :flex-row-reverse
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-row-reverse v}))

(defmethod hoplon.core/do! :flex-column
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-column v}))

(defmethod hoplon.core/do! :flex-column-reverse
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-column-reverse v}))

(defmethod hoplon.core/do! :flex-wrap
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-wrap v}))

(defmethod hoplon.core/do! :flex-wrap-reverse
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-wrap-reverse v}))

(defmethod hoplon.core/do! :flex-nowrap
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-nowrap v}))

(defmethod hoplon.core/do! :flex-wrap-stretch
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-wrap-stretch v}))

(defmethod hoplon.core/do! :flex-wrap-between
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-wrap-between v}))

(defmethod hoplon.core/do! :flex-wrap-around
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-wrap-around v}))

(defmethod hoplon.core/do! :flex-wrap-top
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-wrap-top v}))

(defmethod hoplon.core/do! :flex-wrap-middle
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-wrap-middle v}))

(defmethod hoplon.core/do! :flex-wrap-bottom
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-wrap-bottom v}))

(defmethod hoplon.core/do! :flex-first
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-first v}))

(defmethod hoplon.core/do! :flex-first-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-first@s") v}))

(defmethod hoplon.core/do! :flex-first-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-first@m") v}))

(defmethod hoplon.core/do! :flex-first-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-first@l") v}))

(defmethod hoplon.core/do! :flex-first-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-first@xl") v}))

(defmethod hoplon.core/do! :flex-last
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-last v}))

(defmethod hoplon.core/do! :flex-last-s
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-last@s") v}))

(defmethod hoplon.core/do! :flex-last-m
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-last@m") v}))

(defmethod hoplon.core/do! :flex-last-l
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-last@l") v}))

(defmethod hoplon.core/do! :flex-last-xl
  [elem kw v]
  (hoplon.core/do! elem :class
    {(keyword "uk-flex-last@xl") v}))

(defmethod hoplon.core/do! :flex-none
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-none v}))

(defmethod hoplon.core/do! :flex-auto
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-auto v}))

(defmethod hoplon.core/do! :flex-1
  [elem kw v]
  (hoplon.core/do! elem :class
    {:uk-flex-1 v}))
