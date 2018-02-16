---
external help file: 
applicable: SharePoint Online
title: Remove-SPOUser
schema: 2.0.0
---

# Remove-SPOUser

## SYNOPSIS
Removes a user or a security group from a site collection or a group.


## SYNTAX

```
Remove-SPOUser [-Group <String>] -LoginName <String> -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

You must be a SharePoint Online global administrator and a site collection administrator to run the `Remove-SPOUser` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE-----------------------------
```
Remove-SPOUser -Site https://contoso.sharepoint.com/sites/sc1 -LoginName joe.healy@contoso.com -Group "SC1 Owners"
```
This example removes a user who has the email address joe.healy@contoso.com from the group SC1 Owners in the site collection https://contoso.sharepoint.com/sites/sc1.


## PARAMETERS

### -Group
Specifies the group to remove the user from. If not specified, the cmdlet removes the user from all groups.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoginName
Specifies the user name.


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

### -Site
Specifies the site collection to remove the user from.


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

[Get-SPOUser](Get-SPOUser.md)
