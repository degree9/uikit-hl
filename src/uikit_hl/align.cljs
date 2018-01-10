(ns uikit-hl.align
  (:require [hoplon.core :as hl]))

(def ^:dynamic *align-left*    nil)
(def ^:dynamic *align-left-s*  nil)
(def ^:dynamic *align-left-m*  nil)
(def ^:dynamic *align-left-l*  nil)
(def ^:dynamic *align-left-xl* nil)

(def ^:dynamic *align-right*    nil)
(def ^:dynamic *align-right-s*  nil)
(def ^:dynamic *align-right-m*  nil)
(def ^:dynamic *align-right-l*  nil)
(def ^:dynamic *align-right-xl* nil)

(def ^:dynamic *align-center* nil)

(defmethod hl/do! :uk-align
  [elem _ v]
  (->> v
    (merge {:uk-align-left               *align-left*
            (keyword "uk-align-left@s")  *align-left-s*
            (keyword "uk-align-left@m")  *align-left-m*
            (keyword "uk-align-left@l")  *align-left-l*
            (keyword "uk-align-left@xl") *align-left-xl*

            :uk-align-right               *align-right*
            (keyword "uk-align-right@s")  *align-right-s*
            (keyword "uk-align-right@m")  *align-right-m*
            (keyword "uk-align-right@l")  *align-right-l*
            (keyword "uk-align-right@xl") *align-right-xl*

            :uk-align-center *align-center*})
    (hl/do! elem :class)))

(defmethod hl/do! :align-left
  [elem _ v]
  (hl/do! elem :uk-align {:uk-align-left v}))

(defmethod hl/do! :align-left-s
  [elem _ v]
  (hl/do! elem :uk-align {(keyword "uk-align-left@s") v}))

(defmethod hl/do! :align-left-m
  [elem _ v]
  (hl/do! elem :uk-align {(keyword "uk-align-left@m") v}))

(defmethod hl/do! :align-left-l
  [elem _ v]
  (hl/do! elem :uk-align {(keyword "uk-align-left@l") v}))

(defmethod hl/do! :align-left-xl
  [elem _ v]
  (hl/do! elem :uk-align {(keyword "uk-align-left@xl") v}))

(defmethod hl/do! :align-right
  [elem _ v]
  (hl/do! elem :uk-align {:uk-align-right v}))

(defmethod hl/do! :align-right-s
  [elem _ v]
  (hl/do! elem :uk-align {(keyword "uk-align-right@s") v}))

(defmethod hl/do! :align-right-m
  [elem _ v]
  (hl/do! elem :uk-align {(keyword "uk-align-right@m") v}))

(defmethod hl/do! :align-right-l
  [elem _ v]
  (hl/do! elem :uk-align {(keyword "uk-align-right@l") v}))

(defmethod hl/do! :align-right-xl
  [elem _ v]
  (hl/do! elem :uk-align {(keyword "uk-align-right@xl") v}))

(defmethod hl/do! :align-center
  [elem _ v]
  (hl/do! elem :uk-align {:uk-align-center v}))
