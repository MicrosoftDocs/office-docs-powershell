---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-phishfilterpolicy
applicable: Exchange Online, Exchange Online Protection
title: Set-PhishFilterPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Set-PhishFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-PhishFilterPolicy cmdlet to configure the spoof intelligence policy in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-PhishFilterPolicy [-Identity] <HostedConnectionFilterPolicyIdParameter> -SpoofAllowBlockList <String>
 [-Action <SetPhishFilterPolicyAction>]
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

For more information about spoof intelligence, see [Configure spoof intelligence in EOP](https://docs.microsoft.com/microsoft-365/security/office-365-security/learn-about-spoof-intelligence).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PhishFilterPolicy -Detailed | Export-CSV "C:\My Documents\Spoofed Senders.csv"
$UpdateSpoofedSenders = Get-Content -Raw "C:\My Documents\Spoofed Senders.csv"
Set-PhishFilterPolicy -Identity Default -SpoofAllowBlockList $UpdateSpoofedSenders
```

This example configures the spoof intelligence policy to block or allow all spoofed email messages from a source email server.

- Step 1: Write the output of the Get-PhishFilterPolicy cmdlet to a CSV file.
- Step 2: Add or modify the SpoofedUser and AllowedToSpoof values in the CSV file, save the file, and then read the file and store it as a variable named $UpdateSpoofedSenders.
- Step 3: Use the $UpdateSpoofedSenders variable to configure the spoof intelligence policy.

### Example 2
```powershell
Get-PhishFilterPolicy -Detailed | Export-CSV "C:\My Documents\Spoofed Senders.csv"
$UpdateSpoofedSenders = Get-Content -Raw "C:\My Documents\Spoofed Senders.csv"
Set-PhishFilterPolicy -Identity Default -SpoofAllowBlockList $UpdateSpoofedSenders
```

This example configures the spoof intelligence policy to selectively block or allow some spoofed email messages from a source email server.

- Step 1: Write the output of the Get-PhishFilterPolicy cmdlet to a CSV file.
- Step 2: Add or modify the Sender, SpoofedUser, and AllowedToSpoof values in the CSV file, save the file, and then read the CSV file and store it as a variable named $UpdateSpoofedSenders.
- Step 3: Use the $UpdateSpoofedSenders variable to configure the spoof intelligence policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the spoof intelligence policy that you want to modify. The only valid value is Default.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Action
This parameter is reserved for internal Microsoft use.

```yaml
Type: SetPhishFilterPolicyAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpoofAllowBlockList
The SpoofAllowBlockList parameter specifies the CSV file that you want to use to configure the spoof intelligence policy.

A valid value for this parameter reads the CSV file and stores it as a variable. For example, run the command `$SpoofedUsers = Get-Content -Raw "<PathAndFileName>.csv"`, and then use the value `$SpoofedUsers` for this parameter.

There are two basic options for the CSV file:

- **Block or allow all spoofed mail from the source**: You want to block or allow any and all spoofed messages from the specified message source, regardless of the spoofed email address. You can get the CSV file by running the command `Get-PhishFilterPolicy -Detailed | Export-CSV "<PathAndFileName>.csv"`. The important header fields (column headers) are:

  **Sender**: The domain of the source email server from reverse DNS lookup (PTR records), or the IP address if there aren't any PTR records.

  **AllowedToSpoof**: Indicates whether the message source is allowed to send spoofed messages. Valid values are Yes or No.

- **Block or allow some spoofed mail from the source**: You want to block or allow some spoofed messages from the specified message source, but not others. You can get the CSV file by running the command `Get-PhishFilterPolicy -Detailed | Export-CSV "<PathAndFileName>.csv"`. The important header fields (column headers) are:

  **Sender**

  **SpoofedUser**: The spoofed email address in your organization that the messages appear to be coming from.

  **AllowedToSpoof**

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
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
Applicable: Exchange Online, Exchange Online Protection

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

## OUTPUTS

###  

## NOTES

## RELATED LINKS
