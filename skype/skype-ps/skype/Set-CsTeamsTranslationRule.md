---
external help file: tmp_e2xq4jz1.dwt-help.xml
Module Name: tmp_e2xq4jz1.dwt
online version:
schema: 2.0.0
---

# Set-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to modify an existing normalization rule.

## SYNTAX

```
Set-CsTeamsTranslationRule [-Description <string>] [-Pattern <string>] [-WhatIf] [-Translation <string>]
 [-Identity <string>] [-Tenant <string>] [-Confirm] [-Force] [-Instance <Object>] [-AsJob]
```

## DESCRIPTION
You can use this cmdlet to modify an existing number manipulation rule. The rule can be used, for example, in the settings of your SBC (Set-CSOnlinePSTNGateway) to convert a callee or caller number to a desired format before entering or leaving Microsoft Phone System

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsTranslationRule -Identity StripE164SeattleAreaCode -Pattern ^+12065555(\d{3})$ -Translation $1
```

This example modifies the rule that initially configured to strip +1206555 from any E.164 ten digits number. For example, +12065555555 translated to 5555 to a new pattern. Modified rule now only applies to three digit number (initially to four digits number) and adds one more number in prefix (+120655555 instead of +1206555)



## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Description
A friendly description of the normalization rule.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Identifier of the rule. This parameter is required and later used to assign the rule to Inbound or Outbound Trunk Normalization policy.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
A regular expression that caller or callee number must match in order for this rule to be applied.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose number manipulation rule is being edited.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Translation
The regular expression pattern that will be applied to the number to convert it.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command. The cmdlet is not run.

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
