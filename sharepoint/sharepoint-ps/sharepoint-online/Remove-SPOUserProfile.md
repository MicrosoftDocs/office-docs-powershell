---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Remove-SPOUserProfile
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---

# Remove-SPOUserProfile

## SYNOPSIS
Remove user profile from the tenant.

## SYNTAX

```
Remove-SPOUserProfile -LoginName <String> [<CommonParameters>]
```

## DESCRIPTION
Can be used to remove the SharePoint user profile from the tenant.

> [!NOTE]
> The User must be first be deleted from AAD before the user profile can be deleted. You can use the Azure AD cmdlet Remove-AzureADUser for this action

## EXAMPLES

###   ------------ Example 1 --------------------
```
Remove-SPOUserProfile -LoginName joe.healy@contoso.com
```
Example 1 removes a user who has the e-mail address joe.healy@contoso.com from the SharePoint Online User Profiles of the particular tenant.


## PARAMETERS

### -LoginName
Specifies the login name of the user which user profile is deleted.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Remove-SPOUserInfo](Remove-SPOUserInfo.md)
