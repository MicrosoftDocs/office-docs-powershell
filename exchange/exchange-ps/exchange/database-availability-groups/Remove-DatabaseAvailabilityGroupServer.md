---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Remove-DatabaseAvailabilityGroupServer
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Remove-DatabaseAvailabilityGroupServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-DatabaseAvailabilityGroupServer cmdlet to remove a Mailbox server from a database availability group (DAG). To remove a Mailbox server from a DAG, the Mailbox server must not host any replicated databases.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-DatabaseAvailabilityGroupServer [-Identity] <DatabaseAvailabilityGroupIdParameter>
 [-MailboxServer] <ServerIdParameter> [-ConfigurationOnly] [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [-SkipDagValidation] [-SpareServer] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-DatabaseAvailabilityGroupServer -Identity DAG3 -MailboxServer MBX1
```

This example removes the Mailbox server MBX1 from the DAG DAG3.

### -------------------------- Example 2 --------------------------
```
Remove-DatabaseAvailabilityGroupServer -Identity DAG2 -MailboxServer MBX4 -ConfigurationOnly
```

This example removes the configuration settings for the Mailbox server MBX4 from the DAG DAG2. MBX4 is currently offline and expected to be offline for an extended period, so its configuration is being removed from the DAG to establish quorum for the DAG or to reduce the number of members needed for quorum by the DAG.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the DAG from which you're removing the server.

```yaml
Type: DatabaseAvailabilityGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxServer
The MailboxServer parameter specifies the name of the Mailbox server being removed from the DAG.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 2
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ConfigurationOnly
The ConfigurationOnly switch should only be used if the Mailbox server has been lost and can no longer be contacted, or in situations when the Mailbox server can't be restored to operational service before the messaging service is needed. When used, it removes the Mailbox server from the DAG object in Active Directory. If the Mailbox server is offline but the DAG has quorum, the Mailbox server is evicted from the DAG's cluster and removed from the DAG object in Active Directory.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDagValidation
The SkipDagValidation switch specifies whether to bypass the validation of the DAG's quorum model and the health check on the DAG's witness when removing members from the DAG.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpareServer
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/49290be7-9d3d-4bc3-80ea-f1992fdd1d12.aspx)
