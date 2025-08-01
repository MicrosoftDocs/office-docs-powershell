---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-umhuntgroup
schema: 2.0.0
title: New-UMHuntGroup
---

# New-UMHuntGroup

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-UMHuntGroup cmdlet to create a Unified Messaging (UM) hunt group used to link incoming calls to a specific UM dial plan.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-UMHuntGroup [-Name] <String> -UMDialPlan <UMDialPlanIdParameter> -UMIPGateway <UMIPGatewayIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-PilotIdentifier <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The New-UMHuntGroup cmdlet creates a UM hunt group in Active Directory. Running this cmdlet enables all Mailbox servers associated with UM dial plans to communicate with an IP gateway. A UM hunt group must be created to allow communication between a UM IP gateway and a UM dial plan.

After this task is completed, a new UM hunt group is created.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-UMHuntGroup -Name MyUMHuntGroup -PilotIdentifier 12345 -UMDialPlan MyUMDialPlan -UMIPGateway MyUMIPGateway
```

This example creates the UM hunt group MyUMHuntGroup that has a pilot identifier of 12345.

### Example 2
```powershell
New-UMHuntGroup -Name MyUMHuntGroup -PilotIdentifier 5551234,55555 -UMDialPlan MyUMDialPlan -UMIPGateway MyUMIPGateway
```

This example creates the UM hunt group MyUMHuntGroup that has multiple pilot identifiers.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Name parameter specifies the UM hunt group name used for display purposes. This string can contain as many as 64 characters and it must be unique.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMDialPlan parameter specifies the UM dial plan used with the UM hunt group.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMIPGateway

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMIPGateway parameter specifies the UM IP gateway to be associated with the UM hunt group.

```yaml
Type: UMIPGatewayIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -PilotIdentifier

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PilotIdentifier parameter specifies the number string used to uniquely identify the pilot access number for the specified IP gateway. This number must match the subscriber access number configured in the UM dial plan.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
