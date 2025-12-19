---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/test-applicationaccesspolicy
schema: 2.0.0
title: Test-ApplicationAccessPolicy
---

# Test-ApplicationAccessPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Test-ApplicationAccessPolicy cmdlet to test access right of an application to a specific user/mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Test-ApplicationAccessPolicy [-Identity] <RecipientIdParameter> -AppId <String>
 [<CommonParameters>]
```

## DESCRIPTION
This feature applies only to apps connecting to the Microsoft Graph API for Outlook resources.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-ApplicationAccessPolicy -Identity "Engineering Staff" -AppID 3dbc2ae1-7198-45ed-9f9f-d86ba3ec35b5
```

This example tests access to the specified app for the group "Engineering Staff".

### Example 2
```powershell
Test-ApplicationAccessPolicy -Identity RandomUser9911@AppPolicyTest2.com -AppId e7e4dbfc-046-4074-9b3b-2ae8f144f59b
```

This example tests access to the user RandomUser9911@AppPolicyTest2.com for the specified app.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the recipient to test. You can use any value that uniquely identifies the recipient. For example:

- Name
- Distinguished name (DN)
- Display name
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AppId

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the GUID of the app that you want to test. To find the GUID value of an app, run the command Get-App | Format-Table -Auto DisplayName,AppId.

You can specify multiple app GUID values separated by commas.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
