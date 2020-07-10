---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-recipientfilterconfig
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-RecipientFilterConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-RecipientFilterConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-RecipientFilterConfig cmdlet to enable and configure the Recipient Filter agent.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-RecipientFilterConfig [-BlockedRecipients <MultiValuedProperty>] [-BlockListEnabled <Boolean>]
 [-Confirm] [-DomainController <Fqdn>] [-Enabled <Boolean>] [-ExternalMailEnabled <Boolean>]
 [-InternalMailEnabled <Boolean>] [-RecipientValidationEnabled <Boolean>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-RecipientFilterConfig -RecipientValidationEnabled $true
```

This example modifies the Recipient Filter agent configuration so that recipient validation is enabled.

### Example 2
```powershell
Set-RecipientFilterConfig -BlockListEnabled $true -BlockedRecipients user1@contoso.com,user2@contoso.com
```

This example makes the following changes to the Recipient Filter agent configuration:

- Enables the Blocked Recipients list.

- Adds two users to the Blocked Recipients list.

## PARAMETERS

### -BlockedRecipients
The BlockedRecipients parameter specifies one or more SMTP addresses. To enter multiple SMTP addresses, separate the addresses by using a comma. The maximum number of individual SMTP addresses that you can input is 800.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockListEnabled
The BlockListEnabled parameter specifies whether the Recipient Filter agent blocks messages sent to recipients listed in the BlockedRecipients parameter. Valid input for the BlockListEnabled parameter is $true or $false. The default setting is $false. When the BlockListEnabled parameter is set to $true, the Recipient Filter agent blocks messages sent to recipients listed in the BlockedRecipients parameter.

```yaml
Type: Boolean
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

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Enabled
The Enabled parameter specifies whether the Recipient Filter agent is enabled on the computer on which you're running the command. Valid input for the Enabled parameter is $true or $false. The default setting is $true. When the Enabled parameter is set to $true, the Recipient Filter agent is enabled on the computer on which you're running the command.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailEnabled
The ExternalMailEnabled parameter specifies whether all messages received from unauthenticated connections by servers external to your organization are passed through the Recipient Filter agent for processing. Valid input for the ExternalMailEnabled parameter is $true or $false. The default setting is $true. When the ExternalMailEnabled parameter is set to $true, all messages received from unauthenticated connections by servers external to your organization are passed through the Recipient Filter agent for processing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalMailEnabled
The InternalMailEnabled parameter specifies whether all messages from authenticated sender domains that belong to authoritative domains in the enterprise are passed through the Recipient Filter agent for processing. Valid input for the InternalMailEnabled parameter is $true or $false. The default setting is $false. When the InternalMailEnabled parameter is set to $true, all messages from authenticated sender domains that belong to authoritative domains in the enterprise are passed through the Recipient Filter agent for processing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientValidationEnabled
The RecipientValidationEnabled parameter specifies whether the Recipient Filter agent blocks messages addressed to recipients that don't exist in the organization. Valid input for the RecipientValidationEnabled parameter is $true or $false. The default setting is $false. When the RecipientValidationEnabled parameter is set to $true, the Recipient Filter agent blocks messages addressed to recipients that don't exist in the organization.

```yaml
Type: Boolean
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
