---
external help file: 
applicable: SharePoint Online
title: Get-SPOUser
schema: 2.0.0
---

# Get-SPOUser

## SYNOPSIS
Returns the SharePoint Online user or security group accounts that match a given search criteria.

## SYNTAX

### ByGroup
```
Get-SPOUser [-Group <String>] [-Limit <String>] -Site <SpoSitePipeBind> [<CommonParameters>]
```

### All
```
Get-SPOUser [-Limit <String>] -Site <SpoSitePipeBind> [<CommonParameters>]
```

### ByLogin
```
Get-SPOUser [-LoginName <String>] -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPOUser cmdlet matches one and only one user or security group.

You must be a SharePoint Online global administrator and a site collection administrator to run the Get-SPOUser cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

###   Example 1: Get the first 5 users or groups from a specific site collection
```
PS C:\> $site = Get-SPOSite -Identity https://contoso.sharepoint.com
PS C:\> Get-SPOUser -Limit 5 -Site $site
```
This command retrieves the users or security groups in a site.

## PARAMETERS

### -Group
{{Fill Group Description}}

```yaml
Type: String
Parameter Sets: ByGroup
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
{{Fill Limit Description}}

```yaml
Type: String
Parameter Sets: ByGroup, All
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoginName
{{Fill LoginName Description}}

```yaml
Type: String
Parameter Sets: ByLogin
Aliases: 
Applicable: SharePoint Online

Required: False
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

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Remove-SPOUser](Remove-SPOUser.md)

[Set-SPOUser](Set-SPOUser.md)


