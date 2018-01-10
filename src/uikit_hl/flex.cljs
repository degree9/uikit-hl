(ns uikit-hl.flex
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(defmethod hoplon.core/do! :uk-flex
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex v}))

(defmethod hoplon.core/do! :uk-flex-inline
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex (not v) :uk-flex-inline v}))

(defmethod hoplon.core/do! :uk-flex-left
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-left v}))

(defmethod hoplon.core/do! :uk-flex-left-s
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-left@s") v}))

(defmethod hoplon.core/do! :uk-flex-left-m
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-left@m") v}))

(defmethod hoplon.core/do! :uk-flex-left-l
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-left@l") v}))

(defmethod hoplon.core/do! :uk-flex-left-xl
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-left@xl") v}))

(defmethod hoplon.core/do! :uk-flex-center
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-center v}))

(defmethod hoplon.core/do! :uk-flex-center-s
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-center@s") v}))

(defmethod hoplon.core/do! :uk-flex-center-m
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-center@m") v}))

(defmethod hoplon.core/do! :uk-flex-center-l
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-center@l") v}))

(defmethod hoplon.core/do! :uk-flex-center-xl
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-center@xl") v}))

(defmethod hoplon.core/do! :uk-flex-right
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-right v}))

(defmethod hoplon.core/do! :uk-flex-right-s
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-right@s") v}))

(defmethod hoplon.core/do! :uk-flex-right-m
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-right@m") v}))

(defmethod hoplon.core/do! :uk-flex-right-l
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-right@l") v}))

(defmethod hoplon.core/do! :uk-flex-right-xl
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-right@xl") v}))

(defmethod hoplon.core/do! :uk-flex-between
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-between v}))

(defmethod hoplon.core/do! :uk-flex-between-s
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-between@s") v}))

(defmethod hoplon.core/do! :uk-flex-between-m
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-between@m") v}))

(defmethod hoplon.core/do! :uk-flex-between-l
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-between@l") v}))

(defmethod hoplon.core/do! :uk-flex-between-xl
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-between@xl") v}))

(defmethod hoplon.core/do! :uk-flex-around
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-around v}))

(defmethod hoplon.core/do! :uk-flex-around-s
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-around@s") v}))

(defmethod hoplon.core/do! :uk-flex-around-m
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-around@m") v}))

(defmethod hoplon.core/do! :uk-flex-around-l
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-around@l") v}))

(defmethod hoplon.core/do! :uk-flex-around-xl
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-around@xl") v}))

(defmethod hoplon.core/do! :uk-flex-stretch
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-stretch v}))

(defmethod hoplon.core/do! :uk-flex-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-top v}))

(defmethod hoplon.core/do! :uk-flex-middle
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-middle v}))

(defmethod hoplon.core/do! :uk-flex-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-bottom v}))

(defmethod hoplon.core/do! :uk-flex-row
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-row v}))

(defmethod hoplon.core/do! :uk-flex-row-reverse
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-row-reverse v}))

(defmethod hoplon.core/do! :uk-flex-column
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-column v}))

(defmethod hoplon.core/do! :uk-flex-column-reverse
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-column-reverse v}))

(defmethod hoplon.core/do! :uk-flex-wrap
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-wrap v}))

(defmethod hoplon.core/do! :uk-flex-wrap-reverse
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-wrap-reverse v}))

(defmethod hoplon.core/do! :uk-flex-nowrap
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-nowrap v}))

(defmethod hoplon.core/do! :uk-flex-wrap-stretch
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-wrap-stretch v}))

(defmethod hoplon.core/do! :uk-flex-wrap-between
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-wrap-between v}))

(defmethod hoplon.core/do! :uk-flex-wrap-around
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-wrap-around v}))

(defmethod hoplon.core/do! :uk-flex-wrap-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-wrap-top v}))

(defmethod hoplon.core/do! :uk-flex-wrap-middle
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-wrap-middle v}))

(defmethod hoplon.core/do! :uk-flex-wrap-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-wrap-bottom v}))

(defmethod hoplon.core/do! :uk-flex-first
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-first v}))

(defmethod hoplon.core/do! :uk-flex-first-s
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-first@s") v}))

(defmethod hoplon.core/do! :uk-flex-first-m
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-first@m") v}))

(defmethod hoplon.core/do! :uk-flex-first-l
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-first@l") v}))

(defmethod hoplon.core/do! :uk-flex-first-xl
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-first@xl") v}))

(defmethod hoplon.core/do! :uk-flex-last
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-last v}))

(defmethod hoplon.core/do! :uk-flex-last-s
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-last@s") v}))

(defmethod hoplon.core/do! :uk-flex-last-m
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-last@m") v}))

(defmethod hoplon.core/do! :uk-flex-last-l
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-last@l") v}))

(defmethod hoplon.core/do! :uk-flex-last-xl
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {(keyword "uk-flex-last@xl") v}))

(defmethod hoplon.core/do! :uk-flex-none
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-none v}))

(defmethod hoplon.core/do! :uk-flex-auto
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-auto v}))

(defmethod hoplon.core/do! :uk-flex-1
  [elem kw v]
  (hoplon.core/do! elem :class/uikit
    {:uk-flex-1 v}))
