---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxfolder
schema: 2.0.0
title: Get-MailboxFolder
---

# Get-MailboxFolder

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-MailboxFolder cmdlet to view folders in your own mailbox. Administrators can't use this cmdlet to view folders in other mailboxes (the cmdlet is available only from the MyBaseOptions user role).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### GetChildren
```
Get-MailboxFolder [[-Identity] <MailboxFolderIdParameter>]
 [-GetChildren]
 [-DomainController <Fqdn>]
 [-MailFolderOnly]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Recurse
```
Get-MailboxFolder [[-Identity] <MailboxFolderIdParameter>]
 [-Recurse]
 [-DomainController <Fqdn>]
 [-MailFolderOnly]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This command checks that the mailbox specified in the Identity parameter is a valid Exchange mailbox before retrieving the requested folders. The cmdlet returns all folders if the MailFolderOnly switch isn't specified.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxFolder -Identity :\Inbox | Format List
```

This example returns detailed information about the Inbox folder in your own mailbox.

### Example 2
```powershell
Get-MailboxFolder
```

This example returns a summary list of the root folders in your own mailbox.

### Example 3
```powershell
Get-MailboxFolder -GetChildren -MailFolderOnly
```

This example returns the first level of mail folders in your own mailbox.

### Example 4
```powershell
Get-MailboxFolder -Identity :\Inbox -GetChildren
```

This example returns information about all the subfolders under Inbox in your own mailbox.

### Example 5
```powershell
Get-MailboxFolder -Identity :\Inbox -Recurse
```

This example returns a summary list of all levels of folders under Inbox in your own mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the mailbox folder that you want to view. The syntax is `[MailboxID]:[\ParentFolder][\SubFolder]`.

You can only run this cmdlet on your own mailbox, so you don't need to (or can't) specify a `MailboxID` value.

For the value of `MailboxID`, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

If you don't specify the folder, the command returns information about folders in the root hierarchy of the specified mailbox.

Example values for this parameter are `john@contoso.com:`, `John:\Inbox`.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -GetChildren

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The GetChildren switch specifies whether to return only the first level of subfolders under the specified parent folder. You don't need to specify a value with this switch.

You can't use this switch with the Recurse switch.

```yaml
Type: SwitchParameter
Parameter Sets: GetChildren
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recurse

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Recurse switch specifies whether to return the specified parent folder and all of its subfolders. You don't need to specify a value with this switch.

You can't use this switch with the GetChildren switch.

```yaml
Type: SwitchParameter
Parameter Sets: Recurse
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailFolderOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MailFolderOnly switch specifies whether to return only the mail folders in the specified mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
