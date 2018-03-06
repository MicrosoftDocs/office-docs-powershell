---
external help file: 
applicable: SharePoint Online
title: Get-SPOSiteScript
schema: 2.0.0
---

# Get-SPOSiteScript

## SYNOPSIS

Displays information about existing site scripts. When no parameter is provided, this cmdlet returns the **Id**, **Title**, **Description**, and **Version** of each site script. When a site script ID is provided, this cmdlet also returns the **Content**, which is the JSON of the site script.

## SYNTAX

```powershell
Get-SPOSiteScript
  [[-Identity] <SPOSiteScriptPipeBind>]
  [<CommonParameters>]
```

## PARAMETERS

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site script to get information about. |


## EXAMPLES

### Example 1

The following example shows how to get script information for a specific script ID.

```powershell
PS C:\scripts> Get-SPOSiteScript 07702c07-0485-426f-b710-4704241caad9

Id          : 07702c07-0485-426f-b710-4704241caad9
Title       : Contoso theme
Description :
Content     : {
                  "$schema": "schema.json",
                      "actions": [
                          {
                             "verb": "applyTheme",
                             "themeName": "Custom Cyan"
                          }
                      ],
                          "bindata": { },
                  "version": 1
              }
Version     : 1
```
