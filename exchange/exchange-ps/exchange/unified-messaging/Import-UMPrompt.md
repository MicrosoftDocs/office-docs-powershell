---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Import-UMPrompt
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Import-UMPrompt

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Import-UMPrompt cmdlet to copy or upload a custom audio file to be used by Unified Messaging (UM) dial plans and auto attendants.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Import-UMPrompt -PromptFileData <Byte[]> -PromptFileName <String> -UMDialPlan <UMDialPlanIdParameter>
 [-Confirm] [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Import-UMPrompt -PromptFileData <Byte[]> -PromptFileName <String> -UMAutoAttendant <UMAutoAttendantIdParameter>
 [-Confirm] [-DomainController <Fqdn>] [-WhatIf] -PromptFileStream <Stream> [<CommonParameters>]
```

### Set3
```
Import-UMPrompt -PromptFileName <String> -PromptFileStream <Stream>
 -UMAutoAttendant <UMAutoAttendantIdParameter> [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 -PromptFileData <Byte[]> [<CommonParameters>]
```

### Set4
```
Import-UMPrompt -PromptFileName <String> -PromptFileStream <Stream> -UMDialPlan <UMDialPlanIdParameter>
 [-Confirm] [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Import-UMPrompt cmdlet imports custom greeting audio files into UM dial plans and auto attendants. There are many custom greetings used by UM dial plans and auto attendants including welcome greetings for dial plans and after hours welcome greetings and menus, business hours and non-business hours welcome greetings and menus, and key mappings for UM auto attendants.

After this task is completed, the custom audio file can be used by a UM dial plan or auto attendant.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
[byte[]]$c = Get-content -Path "D:\UMPrompts\welcomegreeting.wav" -Encoding Byte -ReadCount 0; Import-UMPrompt -UMDialPlan MyUMDialPlan -PromptFileName "welcomegreeting.wav" -PromptFileData $c
```

This example imports the welcome greeting file welcomegreeting.wav from D:\UMPrompts into the UM dial plan MyUMDialPlan.

### -------------------------- Example 2 --------------------------
```
[byte[]]$c = Get-content -Path "D:\UMPrompts\welcomegreeting.wav" -Encoding Byte -ReadCount 0; Import-UMPrompt -UMAutoAttendant MyUMAutoAttendant -PromptFileName "welcomegreeting.wav" -PromptFileData $c
```

This example imports the welcome greeting file welcomegreeting.wav from D:\UMPrompts into the UM auto attendant MyUMAutoAttendant.

### -------------------------- Example 3 --------------------------
```
[byte[]]$c = Get-content -Path "D:\UMPrompts\AfterHoursWelcomeGreeting.wav" -Encoding Byte -ReadCount 0; Import-UMPrompt -UMAutoAttendant MyUMAutoAttendant -PromptFileName "AfterHoursWelcomeGreeting.wav" -PromptFileData $c
```

This example imports the welcome greeting file AfterHoursWelcomeGreeting.wav from D:\UMPrompts into the UM auto attendant MyUMAutoAttendant.

## PARAMETERS

### -PromptFileData
The PromptFileData parameter specifies the byte array of the custom prompt.

```yaml
Type: Byte[]
Parameter Sets: Set1, Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PromptFileName
The PromptFileName parameter specifies the name of the custom prompt.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PromptFileStream
The PromptFileStream parameter specifies whether the audio file will be uploaded or imported as an audio stream and not a byte array. The default setting is for the audio file to imported as a byte array.

```yaml
Type: Stream
Parameter Sets: Set2, Set3, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMAutoAttendant
The UMAutoAttendant parameter specifies the UM auto attendant ID. This parameter specifies the directory object identifier for the UM auto attendant.

```yaml
Type: UMAutoAttendantIdParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan
The UMDialPlan parameter specifies the UM dial plan ID. This parameter specifies the directory object identifier for the UM dial plan.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: Set1, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/6a91a841-a054-4b30-a899-2c51c997f527.aspx)
