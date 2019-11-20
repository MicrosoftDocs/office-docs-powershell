---
external help file: tmp_mwszjisg.vzj-help.xml
Module Name: tmp_mwszjisg.vzj
online version:
schema: 2.0.0
---

# New-CsTeamsMobilityPolicy

## SYNOPSIS
The TeamsMobilityPolicy allows Admins to control Teams mobile usage for users. 

## SYNTAX

```
New-CsTeamsMobilityPolicy [-Tenant <System.Guid>] [-Description <String>] [-IPVideoMobileMode <String>]
 [-IPAudioMobileMode <String>] [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The TeamsMobilityPolicy allows Admins to control Teams mobile usage for users. 

The New-CsTeamsMobilityPolicy cmdlet lets an Admin create a custom teams mobility policy to assign to particular sets of users. 

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsMobilityPolicy -Identity SalesMobilityPolicy -IPAudioMobileMode "WifiOnly"
```

The command shown in Example 1 uses the New-CsTeamsMobilityPolicy cmdlet to create a new Teams Mobility Policy with the Identity SalesMobilityPolicy and IPAudioMobileMode equal to WifiOnly. 


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
Enables administrators to provide explanatory text about the policy. For example, the Description might indicate the users the policy should be assigned to.

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

### -Force
Suppress all non-fatal errors.

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

### -IPAudioMobileMode
When set to WifiOnly, prohibits the user from making, receiving calls or joining meetings using VoIP calls on the mobile device while on cellular data connection.

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

### -IPVideoMobileMode
When set to WifiOnly, prohibits the user from making, receiving video calls or enabling video in meetings using VoIP calls on the mobile device while on cellular data connection.

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

### -Identity
Specify the name of the policy that you are creating.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
