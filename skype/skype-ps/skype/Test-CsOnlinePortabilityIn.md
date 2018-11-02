---
external help file: 
applicable: Skype for Business Online
title: Test-CsOnlinePortabilityIn
schema: 2.0.0
---

# Test-CsOnlinePortabilityIn

## SYNOPSIS
Tests the ability to use ported phone numbers from your current service provider to Skype for Business.

## SYNTAX

```
Test-CsOnlinePortabilityIn [-Confirm] [-DomainController <Object>] [-Force] [-TelephoneNumberRanges <String>] [-TelephoneNumbers <String>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Tests the ability to use ported phone numbers from your current service provider to Skype for Business.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> 
```

Insert descriptive text for example 1.


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for Microsoft internal use only.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
This parameter is reserved for Microsoft internal use only.

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

### -TelephoneNumberRanges
Defines a telephone number range to test. For example, let's say you want to test all of your 25 phone numbers (+1 425-555-1235 through 1259). You should enter: "+14255551234-+14255551259".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumbers
Defines a list of telephone numbers to test. For example, let's say you want to test +1 425-555-1235, +1 425-555-1245 and +1 425-555-1259. You should enter: "+14255551235,+14255551245,+14255551259".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

