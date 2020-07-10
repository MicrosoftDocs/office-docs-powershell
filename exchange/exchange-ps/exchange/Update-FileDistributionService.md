---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/update-filedistributionservice
applicable: Exchange Server 2010
title: Update-FileDistributionService
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010"
---

# Update-FileDistributionService

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Update-FileDistributionService cmdlet to access the Microsoft Exchange File Distribution service to poll for offline address book (OAB), Group Metrics, and Unified Messaging (UM) configuration and data.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Update-FileDistributionService [-Identity] <ServerIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Type <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Update-FileDistributionService cmdlet forces the Microsoft Exchange File Distribution service to reload its configuration and poll for new data associated with OAB, Group Metrics, and Unified Messaging configuration.

If you don't use the Type parameter when running this command, OAB, Unified Messaging, and Group Metrics data are reloaded.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Update-FileDistributionService -Identity Server1 -Type "OAB"
```

This example polls Server1 to check for updated OAB files for OABs associated with Server1.

### Example 2
```powershell
Update-FileDistributionService -Identity Server1
```

This example polls Server1 for changes to OAB, Group Metrics, and Unified Messaging files associated with Server1.

### Example 3
```powershell
Update-FileDistributionService -Identity Server1 -Type GM
```

This example polls Server1 for changes to Group Metrics files associated with Server1.

## PARAMETERS

### -Identity
The Identity parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

```yaml
Type: ServerIdParameter
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

### -Type
The Type parameter specifies whether to reload OAB, Unified Messaging, or Group Metrics data. If you don't use the Type parameter when running this command, OAB, Unified Messaging, and Group Metrics data are reloaded.

The Type parameter takes the following values:

- OAB Using the OAB value forces the Exchange File Distribution service to reload its configuration and poll for new data associated with OABs.

- UM Using the UM value forces the Exchange File Distribution service to reload its configuration and poll for new data associated with Unified Messaging.

- GM Using the GM value forces the Exchange File Distribution service to reload its configuration and poll for new data associated with Group Metrics.

```yaml
Type: String
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
