---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-messageclassification
schema: 2.0.0
title: New-MessageClassification
---

# New-MessageClassification

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-MessageClassification cmdlet to create a message classification instance in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Localized
```
New-MessageClassification [-Name] <String> -DisplayName <String> -Locale <CultureInfo> -SenderDescription <String>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-RecipientDescription <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### Identity
```
New-MessageClassification [-Name] <String> -DisplayName <String> -SenderDescription <String>
 [-ClassificationID <Guid>]
 [-Confirm]
 [-DisplayPrecedence <ClassificationDisplayPrecedenceLevel>]
 [-DomainController <Fqdn>]
 [-PermissionMenuVisible <Boolean>]
 [-RecipientDescription <String>]
 [-RetainClassificationEnabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you create a new message classification, you can specify the message classification as a transport rule predicate. Before Microsoft Outlook and Outlook on the web users can apply the message classification to messages, you need to update the end-user systems with the message classification XML file created by the Export-OutlookClassification.ps1 script file. The Export-OutlookClassification.ps1 script file is located in the %ExchangeInstallPath%Scripts directory.

When you create a message classification, it has no locale. By default, the new message classification is used for all locales. After a default message classification is defined, you can add new locales of the classification by running the New-MessageClassification cmdlet and by specifying the default message classification identity that you want to localize.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MessageClassification -Name "My Message Classification" -DisplayName "New Message Classification" -SenderDescription "This is the description text"
```

This example creates the message classification named My Message Classification with the following properties:

- The display name is New Message Classification.
- The sender description is "This is the description text".

### Example 2
```powershell
New-MessageClassification -Name "My Message Classification" -Locale es-ES -DisplayName "España Example" -SenderDescription "Este es el texto de la descripción"
```

In on-premises Exchange, this example creates a locale-specific (Spanish - Spain) version of an existing message classification named "My Message Classification".

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies the unique name for the message classification. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -DisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DisplayName parameter specifies the title of the message classification that's displayed in Outlook and selected by users. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

The message classification XML file must be present on the sender's computer for the display name to be displayed.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locale

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional on in on-premises Exchange.

The Locale parameter specifies a locale-specific version of an existing message classification. You use the -Name parameter to identify the existing message classification, and the SenderDescription parameter to specify the descriptive text in another language.

A valid value for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class (for example, da-DK for Danish or ja-JP for Japanese). For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: Localized
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDescription

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SenderDescription parameter specifies the detailed text that's shown to Outlook senders when they select a message classification to apply to a message before they send the message. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClassificationID

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ClassificationID parameter specifies the classification ID (GUID) of an existing message classification that you want to import and use in your Exchange organization. Use this parameter if you're configuring message classifications that span two Exchange forests in the same organization.

To find the ClassificationID value of the message classification, replace `<MessageClassificationName>` with the name of the message classification and run the following command: `Get-MessageClassification -Identity "<MessageClassificationName>"`.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

### -DisplayPrecedence

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DisplayPrecedence parameter specifies the relative precedence of the message classification to other message classifications that might be applied to a specified message. Valid values are:

- Highest
- Higher
- High
- MediumHigh
- Medium (default value)
- MediumLow
- Low
- Lower
- Lowest

Although Outlook only lets a user specify a single classification for a message, transport rules might apply other classifications to a message. The classification with the highest precedence is shown first and the subsequent classifications, which are those with lesser precedence as defined by this parameter, are appended in the appropriate order thereafter.

```yaml
Type: ClassificationDisplayPrecedenceLevel
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -PermissionMenuVisible

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The PermissionMenuVisible parameter specifies whether the values that you entered for the DisplayName and RecipientDescription parameters are displayed in Outlook as the user composes a message. Valid values are:

- $true: Users can assign the message classification to messages before they're sent, and the classification information is displayed. This value is the default.
- $false: Users can't assign the message classification to messages before they're sent, However, messages received with this message classification still display the classification information.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDescription

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RecipientDescription parameter specifies the detailed text that's shown to Outlook recipient when they receive a message that has the message classification applied. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use this parameter, the value of the SenderDescription parameter is used.

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

### -RetainClassificationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RetainClassificationEnabled parameter specifies whether the message classification should persist with the message if the message is forwarded or replied to.

The default value is $true.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
