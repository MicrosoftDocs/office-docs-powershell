---
external help file: 
applicable: SharePoint Online
title: Revoke-SPOSiteDesignRights
schema: 2.0.0
---

# Revoke-SPOSiteDesignRights

## SYNOPSIS

Revokes rights for specified principals from a site design.

## SYNTAX

```powershell
Revoke-SPOSiteDesignRights
  [-Identity] <SPOSiteDesignPipeBind>
  -Principals <string[]>
  [<CommonParameters>]
```

## PARAMETERS

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site design from which to revoke rights. |
| -Principals  | One or more principals to revoke rights on the specified site design. |

## EXAMPLES

### Example 1 

The following example shows how to revoke rights to a site design for Nestor.

```powershell
PS C:\> Revoke-SPOSiteDesignRights 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
   -Principals "nestorw@contoso.onmicrosoft.com"
```


