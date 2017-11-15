---
external help file:
Module Name: officewebapps
title: Get-OfficeWebAppsMachine
online version:
schema: 2.0.0
---

# Get-OfficeWebAppsMachine

## SYNOPSIS
Returns details about the current server that is in an Office Online Server farm.

## SYNTAX

```
Get-OfficeWebAppsMachine
```

## DESCRIPTION
The Get-OfficeWebAppsMachine cmdlet returns details about the current server that is in an Office Online Server farm.
These details include the roles and health status of the current server and the name of the master server for the farm.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
Get-OfficeWebAppsMachine
```

This example returns details about the current server that is in an Office Online Server farm.

### ------------------EXAMPLE 2---------------------
```
(Get-OfficeWebAppsFarm).Machines
```

This example returns details about all servers that are in a Office Online Server farm.

## PARAMETERS

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS