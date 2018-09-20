---
external help file: 
applicable: SharePoint Online
title: Stop-SPOUserAndContentMove
schema: 2.0.0
---

# Stop-SPOUserAndContentMove

## SYNOPSIS
In a multi-get company, stops the ability to move a user closer to their sites.

## SYNTAX

```
Stop-SPOUserAndContentMove [-UserPrincipalName] <String> [<CommonParameters>]
```

## DESCRIPTION
Stops the ability to move a user's content related objects in a Sharepoint Online Tenant

## EXAMPLES

### ---------------EXAMPLE 1--------------
```yaml
Stop-SPOUserAndContentMove -UserPrincipalName TesIser@contoso.com
```

This will stop the ability to moves the movement of the objects for the "TesIser@contoso.com" in the current Tenant

### ---------------EXAMPLE 2--------------
```yaml
Stop-SPOUserAndContentMove TesIser@contoso.com
```

Equivalent to the one above

## PARAMETERS

### -UserPrincipalName
UserPrincipalName or UPN defined for the specific user on the SPO tenant

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Start-SPOUserAndContentMove](Start-SPOUserAndContentMove.md)
