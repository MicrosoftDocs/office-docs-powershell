---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTeamsVideoInteropServicePolicy
schema: 2.0.0
---

# Get-CsTeamsVideoInteropServicePolicy

## SYNOPSIS
{{Add a synopsis}}

## SYNTAX
```
Get-CsTeamsVideoInteropServicePolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

```
Get-CsTeamsVideoInteropServicePolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsVideoInteropServicePolicy _____________
```

Retrieves the TeamsVideoInteropServicePolicy with name ______________

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".

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
Specify the TeamsVideoInteropServicePolicy that you would like to retrieve.

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
Microsoft internal use.

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
Microsoft internal use.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
