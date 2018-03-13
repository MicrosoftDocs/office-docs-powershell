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

## DESCRIPTION

Revokes rights for specified principals from a site design.

## EXAMPLES

### Example 1 

This example shows how to revoke rights to a site design for Nestor.

```powershell
Revoke-SPOSiteDesignRights 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
   -Principals "nestorw@contoso.onmicrosoft.com"
```


## PARAMETERS

### -Identity
The ID of the site design from which to revoke rights.

```yaml
Type: SPOSiteDesignPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False 
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -Principals
One or more principals to revoke rights on the specified site design.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: True 
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
