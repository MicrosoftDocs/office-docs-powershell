---
external help file: 
applicable: SharePoint Online
title: Get-SPOSiteDesignRights
schema: 2.0.0
---

# Get-SPOSiteDesignRights

## SYNOPSIS

Displays a list of principals and their rights for usage of the site design. This can be used to determine the scope that your site design has with users on the tenant.

## SYNTAX

```powershell
Get-SPOSiteDesignRights
  [-Identity] <SPOSiteDesignPipeBind>
  [<CommonParameters>]
```

## PARAMETERS

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site design to get scoping information. |


## EXAMPLES

### Example 1 

The following example gets the rights for a site design.

```powershell
PS C:\> Get-SPOSiteDesignRights 607aed52-6d61-490a-b692-c0f58a6981a1

DisplayName  PrincipalName                                      Rights
-----------  -------------                                      ------
Nestor Wilke i:0#.f|membership|nestorw@contoso.onmicrosoft.com   View
```
