---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-moverequest
schema: 2.0.0
title: Remove-MoveRequest
---

# Remove-MoveRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Remove-MoveRequest cmdlet to cancel a mailbox move initiated using the New-MoveRequest cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Remove-MoveRequest [-Identity] <MoveRequestIdParameter>
 [-Force]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ProxyToMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### MigrationMoveRequestQueue
```
Remove-MoveRequest -MailboxGuid <Guid> -MoveRequestQueue <DatabaseIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ProxyToMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
In coexistence environments with Exchange 2010 and newer versions of Exchange, don't run a newer version of Remove-MoveRequest to clear completed mailbox move requests between Exchange 2010 databases as documented in [Clear or Remove Move Requests](https://learn.microsoft.com/previous-versions/office/exchange-server-2010/dd351276(v=exchg.141)). Otherwise, you might delete the mailbox that you just moved. In coexistence environments, only use the Remove-MoveRequest cmdlet on Exchange 2010 servers to clear completed Exchange 2010 move requests. For mailbox moves from an Exchange 2010 database to an Exchange 2016 database, you can safely run Remove-MoveRequest on the Exchange 2016 server.

In Exchange 2010, you need to use the Remove-MoveRequest cmdlet on completed move requests to clear the InTransit flag from the mailbox. This step isn't required for mailbox moves in newer versions of Exchange where the Remove-MoveRequest is only used to cancel existing move requests.

The MoveRequestQueue and MailboxGuid parameters are for debugging purposes only.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-MoveRequest -Identity 'Ayla@humongousinsurance.com'
```

This example removes the mailbox move request for Ayla Kol's mailbox.

### Example 2
```powershell
Remove-MoveRequest -MoveRequestQueue MBXDB01 -MailboxGuid 25e0eaf2-6cc2-4353-b83e-5cb7b72d441f
```

This example cancels a mailbox move for a mailbox by using the MailboxGuid parameter for a mailbox on MBXDB01.

The MailboxGuid and MoveRequestQueue parameters are for debugging purposes only.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the identity of the mailbox or mail user. You can use the following values:

- GUID
- Distinguished name (DN)
- Domain\\Account
- User principal name (UPN)
- Legacy Exchange DN
- SMTP address
- Alias

You can't use this parameter with the MailboxGuid or MoveRequestQueue parameters.

```yaml
Type: MoveRequestIdParameter
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxGuid

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The MailboxGuid parameter specifies the GUID of the mailbox for which you want to remove the move request. If you specify the MailboxGuid parameter, you must also specify the MoveRequestQueue parameter.

You can't use this parameter with the Identity parameter.

```yaml
Type: Guid
Parameter Sets: MigrationMoveRequestQueue
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveRequestQueue

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The MoveRequestQueue parameter specifies the database on which the move request is queued. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MigrationMoveRequestQueue
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
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

### -Force

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyToMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ProxyToMailbox parameter specifies the move destination by the location of the specified mailbox (also known as proxying). You can use any value that uniquely identifies the mailbox. For example:

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

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
