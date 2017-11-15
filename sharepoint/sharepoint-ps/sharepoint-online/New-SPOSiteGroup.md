---
external help file: 
applicable: SharePoint Online
title: New-SPOSiteGroup
schema: 2.0.0
---

# New-SPOSiteGroup

## SYNOPSIS
Creates a new group in a SharePoint Online site collection.


## SYNTAX

```
New-SPOSiteGroup -Group <String> -PermissionLevels <String[]> -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION
A SharePoint group is a set of individual users.
SharePoint groups enable you to manage sets of users instead of individual users.

You must be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -Group
{{Fill Group Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionLevels
{{Fill PermissionLevels Description}}

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

### -Site
{{Fill Site Description}}

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[New-SPOSite]()
