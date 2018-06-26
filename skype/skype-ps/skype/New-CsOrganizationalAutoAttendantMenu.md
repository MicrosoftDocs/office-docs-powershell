---
external help file: New-CsOrganizationalAutoAttendantMenu.xml
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendantMenu
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantMenu

## SYNOPSIS
The New-CsOrganizationalAutoAttendantMenu cmdlet creates a new menu.

## SYNTAX

```
New-CsOrganizationalAutoAttendantMenu -Name <String> -MenuOptions <List> [-Prompts <List>] [-EnableDialByName] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOrganizationalAutoAttendantMenu cmdlet creates a new menu for the Auto Attendant (AA) service. The OAA service uses menus to provide callers with choices, and then takes action based on the selection.


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$menuPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign."
$menu = New-CsOrganizationalAutoAttendantMenu -Name "Default Menu" -Prompts @($menuPrompt) -EnableDialByName
```

This example creates a new menu that allows the caller to reach a target by name.

### -------------------------- Example 2 -------------------------- 
```
$menuOptionZero = New-CsOrganizationalAutoAttendantMenuOption -Action TransferCallToOperator -DtmfResponse Tone0
$menuPrompt = New-CsOrganizationalAutoAttendantPrompt -TextToSpeechPrompt "To reach your party by name, enter it now, followed by the pound sign. For operator, press zero."
$menu = New-CsOrganizationalAutoAttendantMenu -Name "Default Menu" -Prompts @($menuPrompt) -MenuOptions @($menuOptionZero) -EnableDialByName
```

This example creates a new menu that allows the caller to reach a target by name or the operator by pressing the 0 key.


## PARAMETERS

### -Name
The Name parameter represents a friendly name for the menu.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MenuOptions
The MenuOptions parameter is a list of menu options for this menu. These menu options specify what action to take when the user sends a particular input. 

You can create menu options by using the New-CsOrganizationalAutoAttendantMenuOption cmdlet.


```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Prompts
The Prompts parameter reflects the prompts to play when the menu is activated. 

You can create new prompts by using the New-CsOrganizationalAutoAttendantPrompt cmdlet.


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDialByName
The EnableDialByName parameter lets users do a directory search by recipient name and get transferred to the party.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.Menu


## NOTES

## RELATED LINKS

[New-CsOrganizationalAutoAttendantMenuOption](New-CsOrganizationalAutoAttendantMenuOption.md)
[New-CsOrganizationalAutoAttendantPrompt](New-CsOrganizationalAutoAttendantPrompt.md)

