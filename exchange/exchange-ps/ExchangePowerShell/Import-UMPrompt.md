---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/import-umprompt
schema: 2.0.0
title: Import-UMPrompt
---

# Import-UMPrompt

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Import-UMPrompt cmdlet to copy or upload a custom audio file to be used by Unified Messaging (UM) dial plans and auto attendants.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### UploadDialPlanPrompts
```
Import-UMPrompt -PromptFileData <Byte[]> -PromptFileName <String> -UMDialPlan <UMDialPlanIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

### UploadAutoAttendantPrompts
```
Import-UMPrompt -PromptFileData <Byte[]> -PromptFileName <String> -UMAutoAttendant <UMAutoAttendantIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

### UploadAutoAttendantPromptsStream
```
Import-UMPrompt -PromptFileName <String> -PromptFileStream <Stream> -UMAutoAttendant <UMAutoAttendantIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

### UploadDialPlanPromptsStream
```
Import-UMPrompt -PromptFileName <String> -PromptFileStream <Stream> -UMDialPlan <UMDialPlanIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Import-UMPrompt cmdlet imports custom greeting audio files into UM dial plans and auto attendants. There are many custom greetings used by UM dial plans and auto attendants including welcome greetings for dial plans and after hours welcome greetings and menus, business hours and non-business hours welcome greetings and menus, and key mappings for UM auto attendants.

After this task is completed, the custom audio file can be used by a UM dial plan or auto attendant.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Import-UMPrompt -UMDialPlan MyUMDialPlan -PromptFileName "welcomegreeting.wav" -PromptFileData ([System.IO.File]::ReadAllBytes('D:\UMPrompts\welcomegreeting.wav'))
```

This example imports the welcome greeting file welcomegreeting.wav from D:\\UMPrompts into the UM dial plan MyUMDialPlan.

### Example 2
```powershell
Import-UMPrompt -UMAutoAttendant MyUMAutoAttendant -PromptFileName "welcomegreeting.wav" -PromptFileData ([System.IO.File]::ReadAllBytes('D:\UMPrompts\welcomegreeting.wav'))
```

This example imports the welcome greeting file welcomegreeting.wav from D:\\UMPrompts into the UM auto attendant MyUMAutoAttendant.

### Example 3
```powershell
Import-UMPrompt -UMAutoAttendant MyUMAutoAttendant -PromptFileName "AfterHoursWelcomeGreeting.wav" -PromptFileData ([System.IO.File]::ReadAllBytes('D:\UMPrompts\AfterHoursWelcomeGreeting.wav'))
```

This example imports the welcome greeting file AfterHoursWelcomeGreeting.wav from D:\\UMPrompts into the UM auto attendant MyUMAutoAttendant.

## PARAMETERS

### -PromptFileData

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PromptFileData parameter specifies the byte array of the custom prompt.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

```yaml
Type: Byte[]
Parameter Sets: UploadDialPlanPrompts, UploadAutoAttendantPrompts
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PromptFileName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PromptFileName parameter specifies the name of the custom prompt.

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

### -PromptFileStream

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PromptFileStream parameter specifies whether the audio file is uploaded or imported as an audio stream and not a byte array. The default setting is for the audio file to imported as a byte array.

```yaml
Type: Stream
Parameter Sets: UploadAutoAttendantPromptsStream, UploadDialPlanPromptsStream
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMAutoAttendant

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMAutoAttendant parameter specifies the UM auto attendant ID. This parameter specifies the directory object identifier for the UM auto attendant.

```yaml
Type: UMAutoAttendantIdParameter
Parameter Sets: UploadAutoAttendantPrompts, UploadAutoAttendantPromptsStream
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMDialPlan parameter specifies the UM dial plan ID. This parameter specifies the directory object identifier for the UM dial plan.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: UploadDialPlanPrompts, UploadDialPlanPromptsStream
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
