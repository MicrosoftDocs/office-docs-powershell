---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Stop-DatabaseAvailabilityGroup
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Stop-DatabaseAvailabilityGroup

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Stop-DatabaseAvailabilityGroup cmdlet to mark a member of a database availability group (DAG) as failed, or to mark all DAG members in a specific Active Directory site as failed.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Stop-DatabaseAvailabilityGroup [-Identity] <DatabaseAvailabilityGroupIdParameter>
 -ActiveDirectorySite <AdSiteIdParameter> [-ConfigurationOnly] [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [-QuorumOnly] [<CommonParameters>]
```

### Set2
```
Stop-DatabaseAvailabilityGroup [-Identity] <DatabaseAvailabilityGroupIdParameter>
 -MailboxServer <MailboxServerIdParameter> [-ConfigurationOnly] [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [-QuorumOnly] [<CommonParameters>]
```

## DESCRIPTION
The Stop-DatabaseAvailabilityGroup cmdlet is used during a datacenter switchover. This cmdlet is used to mark one or members of the DAG as failed (also known as stopped).The Stop-DatabaseAvailabilityGroup cmdlet can be run against a DAG only when the DAG is configured with a DatacenterActivationMode value of DagOnly.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Stop-DatabaseAvailabilityGroup -Identity DAG1 -MailboxServer MBX2
```

This example stops the Mailbox server MBX2 in the DAG DAG1.

### -------------------------- Example 2 --------------------------
```
Stop-DatabaseAvailabilityGroup -Identity DAG1 -ActiveDirectorySite Redmond
```

This example stops all members in the DAG DAG1 in the Active Directory site Redmond.

### -------------------------- Example 3 --------------------------
```
Stop-DatabaseAvailabilityGroup -Identity DAG2 -MailboxServer MBX3 -ConfigurationOnly
```

This example stops the Mailbox server MBX3, which is currently offline, in the DAG DAG2.

## PARAMETERS

### -ActiveDirectorySite
The ActiveDirectorySite parameter specifies the Active Directory site containing the DAG members to stop (for example, stop all DAG members in a particular Active Directory site).

```yaml
Type: AdSiteIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the DAG being stopped.

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
The MailboxServer parameter specifies a single DAG member to stop. If Datacenter Activation Coordination mode is enabled for the DAG and all DAG members are in the same Active Directory site, use the MailboxServer parameter to stop individual DAG members instead of the ActiveDirectorySite parameter when stopping failed DAG members.

```yaml
Type: MailboxServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ConfigurationOnly
The ConfigurationOnly parameter updates the Active Directory properties with the stop action, but doesn't perform a stop of the DAG or any members. This parameter must be used when the DAG member servers are offline, but Active Directory is up and accessible in the primary datacenter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -QuorumOnly
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
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

[Online Version](https://technet.microsoft.com/library/1e167fe5-b1c5-48d9-b3d8-4cf823d1c43c.aspx)
