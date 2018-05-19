(ns uikit-hl.align
  (:require [hoplon.core :as hl]))

(defmethod hl/do! :uk-align-left
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-align-left v}))

(defmethod hl/do! :uk-align-left-s
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-align-left@s") v}))

(defmethod hl/do! :uk-align-left-m
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-align-left@m") v}))

(defmethod hl/do! :uk-align-left-l
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-align-left@l") v}))

(defmethod hl/do! :uk-align-left-xl
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-align-left@xl") v}))

(defmethod hl/do! :uk-align-right
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-align-right v}))

(defmethod hl/do! :uk-align-right-s
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-align-right@s") v}))

(defmethod hl/do! :uk-align-right-m
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-align-right@m") v}))

(defmethod hl/do! :uk-align-right-l
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-align-right@l") v}))

(defmethod hl/do! :uk-align-right-xl
  [elem _ v]
  (hl/do! elem :class/uikit {(keyword "uk-align-right@xl") v}))

(defmethod hl/do! :uk-align-center
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-align-center v}))
