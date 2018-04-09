---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2010
title: Disable-UMServer
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Disable-UMServer

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Disable-UMServer cmdlet to set the status of a Unified Messaging (UM) server to disabled. This prevents the Unified Messaging server from processing UM calls.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Disable-UMServer [-Identity] <UMServerIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-Immediate <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Disable-UMServer cmdlet sets the status of a Unified Messaging server. A UM server has a logical status variable controlled using the enable and disable cmdlets. A UM server won't process any new calls unless it's in the enabled state. With this status variable, you can start or stop call processing on a UM server so the UM server can be brought online or taken offline in a controlled way.

After this task is completed, the UM server can no longer:

- Answer any incoming calls

- Respond to Play on Phone requests from a Client Access server

- Be used to manage UM-enabled mailboxes

- Be queried when a diagnostic task is used

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Disable-UMServer -Identity MyUMServer
```

This example disables Unified Messaging on the Unified Messaging server named MyUMServer but doesn't disconnect calls that are being processed.

### -------------------------- Example 2 --------------------------
```
Disable-UMServer -Identity MyUMServer -Immediate $true
```

This example disables Unified Messaging on the Unified Messaging server named MyUMServer and disconnects all calls being processed.

## PARAMETERS

### -Identity
The Identity parameter specifies the identifier for the Unified Messaging server being disabled. This is the directory object ID for the UM server.

```yaml
Type: UMServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: 1
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
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Immediate
The Immediate parameter specifies whether the Unified Messaging server drops all current calls or enables current calls to finish. If this parameter is set to $true, all calls that are currently connected are disconnected.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/f5d77b6c-7229-4ffb-a9e5-ec4ddf98f838.aspx)
