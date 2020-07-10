---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/add-databaseavailabilitygroupserver
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Add-DatabaseAvailabilityGroupServer
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Add-DatabaseAvailabilityGroupServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Add-DatabaseAvailabilityGroupServer cmdlet to add a Mailbox server to a database availability group (DAG). A DAG is a set of Mailbox servers that use continuous replication and managed availability to provide automatic database-level recovery from database, server, or network failures.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Add-DatabaseAvailabilityGroupServer [-Identity] <DatabaseAvailabilityGroupIdParameter> [-MailboxServer] <ServerIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-SkipDagValidation]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
A computer object for a DAG is created in Active Directory when the first server is added to the DAG. This object is used to authenticate servers to each other within a DAG.

To add a Mailbox server to a DAG, the Mailbox server must be running the Windows Server 2008 R2 Enterprise or Datacenter operating system, the Windows Server 2012 Standard or Datacenter operating system, or the Windows Server 2012 R2 operating system, and it must not belong to any other DAG. The Mailbox server must be running the same versions of the Windows operating system and Microsoft Exchange, and be in the same Active Directory domain as all other Mailbox servers in the DAG. In addition, the Mailbox server must not be configured as an Active Directory domain controller or global catalog server.

To add the first server to a DAG and create a computer object for the DAG, the Exchange Windows Permissions security group must have the appropriate rights to add computer accounts to the domain. Alternatively, a computer account can be created and disabled prior to adding the server. Adding the first server to the DAG enables the computer account for the DAG. Thus, the account used for the task doesn't need permissions to add a computer account to the domain. If you're pre-creating the computer account, the name of the account must match the name for the DAG. For example, if the DAG is named DAG1, the computer account must be named DAG1.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-DatabaseAvailabilityGroupServer -Identity DAG1 -MailboxServer MBX1
```

This example adds the Mailbox server MBX1 to the DAG DAG1.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the DAG to which the server is being added.

```yaml
Type: DatabaseAvailabilityGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxServer
The MailboxServer parameter specifies the Mailbox server to add to the DAG. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- ExchangeLegacyDN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDagValidation
The SkipDagValidation switch specifies whether to bypass the validation of the DAG's quorum model and the health check on the DAG's witness when adding members to the DAG.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
