---
external help file: 
applicable: SharePoint Online
title: Remove-SPOUserInfo
schema: 2.0.0
---

# Remove-SPOUserInfo

## SYNOPSIS
Removes user from user information list of specific site collection.

## SYNTAX

```
Remove-SPOUserInfo -LoginName <String> -Site <SpoSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION
Can be used to remove user from user information lists of the specific site collections.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

###   ------------ Example 1 --------------------
```
Remove-SPOUserInfo -LoginName joe.healy@contoso.com -Site https://contoso.sharepoint.com/sites/sc1 
```
Example 1 removes a user who has the e-mail address joe.healy@contoso.com from the user ifnoramtion list of https://contoso.sharepoint.com/sites/sc1 site collection.

## PARAMETERS

### -LoginName
Specifies the login name of the user to removed from user information list.

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
Specifies the URL of the site collection.

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

[Remove-SPOUserProfile](Remove-SPOUserProfile.md)
