---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Set-PhishFilterPolicy
schema: 2.0.0
---

# Set-PhishFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-PhishFilterPolicy cmdlet to configure the phish filter policy in your cloud-based organization.

This cmdlet is only available in Office 365 Enterprise E5, or with Advanced Threat Protection licenses.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-PhishFilterPolicy [-Identity] <HostedConnectionFilterPolicyIdParameter> -SpoofAllowBlockList <String>
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

For more information about spoof intelligence, see Learn more about spoof intelligence (https://go.microsoft.com/fwlink/p/?linkid=869584).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-PhishFilterPolicy -Detailed -SpoofAllowBlockList | Export-CSV "C:\My Documents\Spoofed Senders.csv"; $UpdateSpoofedSenders = Get-Content -Raw "C:\My Documents\Spoofed Senders.csv"; Set-PhishFilterPolicy -Identity Default -SpoofAllowBlockList $UpdateSpoofedSenders
```

This configures the phish filter policy to block or allow all spoofed email messages from a source messaging server.

- Step 1: Write the output of the Get-PhishFilterPolicy cmdlet to a CSV file.

- Step 2: Add or modify the SpoofedUser, and AllowedToSpoof values in the CSV file, save the file, and then read the file and store it as a variable named $UpdateSpoofedSenders.

- Step 3: Use the $UpdateSpoofedSenders variable to configure the phish filter policy.

### Example 2
```
Get-PhishFilterPolicy -Detailed -SpoofAllowBlockList | Export-CSV "C:\My Documents\Spoofed Senders.csv"; $UpdateSpoofedSenders = Get-Content -Raw "C:\My Documents\Spoofed Senders.csv"; Set-PhishFilterPolicy -Identity Default -SpoofAllowBlockList $UpdateSpoofedSenders
```

This example configures the phish filter policy to selectively block or allow some spoofed email messages from a source messaging server.

- Step 1: Write the output of the Get-PhishFilterPolicy cmdlet to a CSV file.

- Step 2: Add or modify the Sender, SpoofedUser, and AllowedToSpoof values in the CSV file, save the file, and then read the CSV file and store it as a variable named $UpdateSpoofedSenders.

- Step 3: Use the $UpdateSpoofedSenders variable to configure the phish filter policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the phish filter policy that you want to modify. The only available value is Default.

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

### -SpoofAllowBlockList
The SpoofAllowBlockList parameter specifies the CSV file that you want to use to configure the phish filter policy.

A valid value for this parameter reads the CSV file and stores it as a variable. For example, run the command $SpoofedUsers = Get-Content -Raw \<PathAndFileName\>.csv, and then use the value $SpoofedUsers for this parameter.

There are two basic options for the CSV file:

- Block or allow all spoofed mail from the source: You want to block or allow any and all spoofed messages from the specified message source, regardless of the spoofed email address. You can get the CSV file by running the command Get-PhishFilterPolicy -SpoofAllowBlockList | Export-CSV "\<PathAndFileName\>.csv". The important header fields (column headers) are Sender (the domain of the source messaging server from DNS records, or the IP address if there aren't any DNS records) and AllowedToSpoof (indicates whether the message source is allowed to send spoofed messages. Valid values are Yes or No).

- Block or allow some spoofed mail from the source: You want to block or allow some spoofed messages from the specified message source, but not others. You can get the CSV file by running the command Get-PhishFilterPolicy -Detailed -SpoofAllowBlockList | Export-CSV "\<PathAndFileName\>.csv". The important header fields (column headers) are:

- Sender: The domain of the source messaging server from DNS records, or the IP address if there aren't any DNS records.

- SpoofedUser: The spoofed email address in your organization that the messages appear to be coming from.

- AllowedToSpoof: Indicates whether messages that contain the spoofed sender from the source messaging server are allowed. Valid values are Yes or No.

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/ed0f903a-6b05-4e84-a362-c10d0e9117c4.aspx)
