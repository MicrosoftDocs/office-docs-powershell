---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online 
title: Get-CsTeamsEmergencyCallRoutingPolicy
author:
ms.author:Danny Levin
ms.reviewer: 
schema: 2.0.0
---

# Get-CsTeamsEmergencyCallRoutingPolicy

## SYNOPSIS

## SYNTAX

### Identity (Default)
```
Get-CsTeamsEmergencyCallRoutingPolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsEmergencyCallRoutingPolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION
{{ This cmdlet returns one or more Emergency Call Routing policy. This Policy is used for the life cycle of emergency call routing – emergency numbers and routing configuration }}

## EXAMPLES

### Example 1
```powershell
PS C:> {{ Get-CsTeamsEmergencyCallRoutingPolicy }}
```

{{  Retrieve all emergency call routing policy that are available in your scope }}

### Example 2
```powershell
PS C:> {{ Get-CsTeamsEmergencyCallRoutingPolicy -Identity TestECRP}}
```

{{  Retrieve one emergency call routing policy with specific identity }}

## PARAMETERS

### -Filter
{{ The Filter parameter allows you to limit the number of results based on filters you specify. }}

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{ Specify the policy that you would like to retrieve. }}

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
{{ Microsoft internal use. }}

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

### -Tenant
{{ Microsoft internal use. }}

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
