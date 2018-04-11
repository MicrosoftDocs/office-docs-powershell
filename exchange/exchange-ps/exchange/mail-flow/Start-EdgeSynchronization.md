---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Start-EdgeSynchronization
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Start-EdgeSynchronization

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Start-EdgeSynchronization cmdlet to immediately start synchronization of configuration data from Active Directory to the subscribed Edge Transport servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Start-EdgeSynchronization [-Confirm] [-ForceFullSync] [-ForceUpdatecookie] [-Server <ServerIdParameter>]
 [-TargetServer <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Microsoft Exchange EdgeSync service that runs on Mailbox servers replicates data stored in Active Directory to the local Active Directory Lightweight Directory Services (AD LDS) store on the Edge Transport server. After the initial replication, one-way synchronization of changed data in Active Directory to AD LDS keeps this data up to date.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Start-EdgeSynchronization -Server Mailbox01
```

This example starts edge synchronization on the Mailbox server named Mailbox01.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -ForceFullSync
The ForceFullSync switch specifies whether to initiate a full edge synchronization. If you run the command without this switch, only changes since the last replication are synchronized. If you use this switch, the entire configuration information and recipient data are synchronized.

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

### -ForceUpdatecookie
The ForceUpdateCookie switch specifies whether to force the Microsoft Exchange EdgeSync service to update the replication cookie even if it encounters an error. The cookie maintains the changes in Active Directory since the previous EdgeSync replication. Normally, the Microsoft Exchange EdgeSync service doesn't update the cookie if it encounters any errors during replication.

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

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetServer
The TargetServer parameter specifies an Edge Transport server to initiate edge synchronization with. If omitted, all Edge Transport servers are synchronized.

You may want to use this parameter to specify a single Edge Transport server for synchronization if a new Edge Transport server has been installed or if that Edge Transport server has been unavailable for some time.

```yaml
Type: String
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

### -ForceUpdatecookie
The ForceUpdateCookie switch specifies whether to force the Microsoft Exchange EdgeSync service to update the replication cookie even if it encounters an error. The cookie maintains the changes in Active Directory since the previous EdgeSync replication. Normally, the Microsoft Exchange EdgeSync service doesn't update the cookie if it encounters any errors during replication.

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

[Online Version](https://technet.microsoft.com/library/7f8240bb-05fa-47c5-adcf-c843dbced0e8.aspx)
