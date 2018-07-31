---
external help file: 
applicable: SharePoint Online
title: Grant-SPOSiteDesignRights
schema: 2.0.0
---

# Grant-SPOSiteDesignRights

## SYNOPSIS

Used to apply permissions to a set of users or a security group, effectively scoping the visibility of the site design in the UX. They start off public, but after you set permissions, only those groups or users with permissions can access the site design.

## SYNTAX

```powershell
Grant-SPOSiteDesignRights
  [-Identity] <SPOSiteDesignPipeBind>
  -Principals <string[]>
  -Rights {View}
  [<CommonParameters>]
```

## DESCRIPTION

Used to apply permissions to a set of users or a security group, effectively scoping the visibility of the site design in the UX. They start off public, but after you set permissions, only those groups or users with permissions can access the site design.

## EXAMPLES

### Example 1

This example shows how to grant view rights on a site design to Nestor (a security group at the fictional Contoso site).

```powershell
Grant-SPOSiteDesignRights `
         -Identity 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
         -Principals "SiteCreators@contoso.onmicrosoft.com" `
         -Rights View
```

or, if adding a specific user (a user at the fictional Contoso site).

```powershell
Grant-SPOSiteDesignRights `
         -Identity 44252d09-62c4-4913-9eb0-a2a8b8d7f863 `
         -Principals "chris.forbes@contoso.onmicrosoft.com" `
         -Rights View
```


## PARAMETERS

### -Identity
The ID of the site design to get scoping information.

```yaml
Type: SPOSiteDesignPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: True 
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

### -Principals
One or more principles to add permissions for. 

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

### -Rights
Always set to the value **View**. Any user or group with view permissions can view and use the site design.

```yaml
Type: SPOSiteDesignPrincipalRights
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: True 
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

