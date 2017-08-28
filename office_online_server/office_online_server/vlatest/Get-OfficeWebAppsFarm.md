---
external help file: Microsoft.Office.Web.Apps.Administration.dll-Help.xml
Module Name: officewebapps
online version: http://technet.microsoft.com/EN-US/library/1f0704e1-a41d-40e6-a31b-08b1926ce811(Office.15).aspx
schema: 2.0.0
---

# Get-OfficeWebAppsFarm

## SYNOPSIS
Returns details about the OfficeWebAppsFarm object that the current server is a member of.

## SYNTAX

```
Get-OfficeWebAppsFarm
```

## DESCRIPTION
The Get-OfficeWebAppsFarm cmdlet returns details about the OfficeWebAppsFarm object that the current server is a member of.
This object represents a group of servers that work as a unit to provide web-based editing and viewing of Office documents.
No parameters are used with the Get-OfficeWebAppsFarm cmdlet.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
Get-OfficeWebAppsFarm
```

This example returns details about the OfficeWebAppsFarm object.

### ------------------EXAMPLE 2---------------------
```
(Get-OfficeWebAppsFarm).Machines
```

This example returns details about the servers that are members of the Office Online Server farm.
These details include the health status and roles held by each server.

## PARAMETERS

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/1f0704e1-a41d-40e6-a31b-08b1926ce811(Office.15).aspx)

