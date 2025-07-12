---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/test-mrshealth
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Test-MRSHealth
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Test-MRSHealth

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-MRSHealth cmdlet to test the health of an instance of the Microsoft Exchange Mailbox Replication service.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Test-MRSHealth [[-Identity] <ServerIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxQueueScanAgeSeconds <Int32>]
 [-MonitoringContext <Boolean>]
 [-MRSProxyCredentials <PSCredential>]
 [-MRSProxyServer <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Microsoft Exchange Mailbox Replication service runs on Mailbox servers. This command ensures that the Mailbox Replication service is running and that it responds to a remote procedure call (RPC) ping check.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxServer | Test-MRSHealth
```

This example tests the health of the Mailbox Replication service on all Mailbox servers.

### Example 2
```powershell
Test-MRSHealth MBX01
```

This example tests the health of the Mailbox Replication service on the Mailbox server named MBX01.

## PARAMETERS

### -Identity
The Identity parameter specifies the server on which to perform the health test. You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- ExchangeLegacyDN
- GUID

If you don't specify the server, the command runs on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
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

### -MaxQueueScanAgeSeconds
The MaxQueueScanAgeSeconds parameter specifies the threshold for the last queue scan property. If the time stamp on the last queue scan property is older than the value specified by this parameter, an error event is created that shows the Mailbox Replication service isn't scanning mailbox database queues. The default value is 1800 seconds (30 minutes).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext
The MonitoringContext parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values are:

- $true: Monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).
- $false: Monitoring events and performance counters aren't included in the command results. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSProxyCredentials
The MRSProxyCredentials parameter specifies the credentials that are required for the MRSProxyPingCheck test on the server that's specified by the MRSProxyServer parameter.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSProxyServer
The MRSProxyServer parameter specifies the fully qualified domain name (FQDN) of the target server for the MRSProxyPingCheck test.

The Microsoft Replication proxy service is part of the Mailbox Replication service, and is used for remote mailbox moves. However, the Mailbox Replication proxy service communicates only with the Mailbox Replication service on another server. You can test the Mailbox Replication proxy service in the following ways:

- If you specify an MRSProxyServer value and you specify the source server by using the Identity parameter, the test is performed between that server and the target server specified by the MRSProxyServer parameter.
- If you specify an MRSProxyServer value and you don't specify a source server by using the Identity parameter, the test is performed between the local server and the target server specified by the MRSProxyServer parameter.
- If you don't specify an MRSProxyServer value or an Identity value, the test is performed between the Mailbox Replication service and the Mailbox Replication proxy service on the local server.

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

### -WhatIf
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
