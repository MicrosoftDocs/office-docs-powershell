---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-UMActiveCalls
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-UMActiveCalls

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-UMActiveCalls cmdlet to return information about the calls that are active and being processed by the Mailbox server running the Microsoft Exchange Unified Messaging service.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Get-UMActiveCalls -DialPlan <UMDialPlanIdParameter> [-DomainController <Fqdn>] [<CommonParameters>]
```

### Set2
```
Get-UMActiveCalls -InstanceServer <UMServer> [-DomainController <Fqdn>] [<CommonParameters>]
```

### Set4
```
Get-UMActiveCalls -IPGateway <UMIPGatewayIdParameter> [-DomainController <Fqdn>] [<CommonParameters>]
```

### Set1
```
Get-UMActiveCalls [-DomainController <Fqdn>] [-Server <ServerIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-UMActiveCalls cmdlet returns information about the active calls being processed. If the Get-UMActiveCalls cmdlet specifies either the UM dial plan or UM IP gateway, it looks in Active Directory to determine which Mailbox server running the Microsoft Exchange Unified Messaging service must be contacted. If the Mailbox server is specified at a command prompt, the Get-UMActiveCalls cmdlet returns the active calls being processed by the server specified.

When a Mailbox server is process cycling, the Get-UMActiveCalls cmdlet doesn't return a list of all calls for both the discontinued process and the active process. It returns the active calls only for the new process.

After this task is completed, you can see the list of active calls being processed by a Mailbox server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-UMActiveCalls
```

This example displays the details of all active calls on the local Mailbox server.

### -------------------------- Example 2 --------------------------
```
Get-UMActiveCalls -Server MyUMServer
```

This example displays the details of all active calls on the Mailbox server MyUMServer.

### -------------------------- Example 3 --------------------------
```
Get-UMActiveCalls -IPGateway MyUMIPGateway
```

This example displays the details of all active calls being processed by the UM IP gateway MyUMIPGateway.

### -------------------------- Example 4 --------------------------
```
Get-UMActiveCalls -DialPlan MyUMDialPlan
```

This example displays a list of active calls associated with the UM dial plan MyUMDialPlan.

## PARAMETERS

### -DialPlan
The DialPlan parameter specifies the UM dial plan for which you want to retrieve active calls.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstanceServer
The InstanceServer parameter specifies the Mailbox server running the Microsoft Exchange Unified Messaging service for which you want to retrieve active calls.

```yaml
Type: UMServer
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPGateway
The IPGateway parameter specifies the UM IP gateway for which you want to retrieve active calls.

```yaml
Type: UMIPGatewayIdParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
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

### -Server
The Server parameter specifies the Mailbox server running the Microsoft Exchange Unified Messaging service for which you want to retrieve active calls.

```yaml
Type: ServerIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/4c7418a5-783c-4db7-82da-49ceaa3d534f.aspx)
