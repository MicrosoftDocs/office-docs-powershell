---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# Get-CsTeamsVdiPolicy

## SYNOPSIS
The CsTeamsVdiPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting specifically on an unoptimized VDI environment. It also controls whether a user can be in VDI 2.0 optimization mode.

## SYNTAX

### Identity (Default)
```powershell
Get-CsTeamsVdiPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```powershell
Get-CsTeamsVdiPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsVdiPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting specifically on an unoptimized VDI environment. It also controls whether a user can be in VDI 2.0 optimization mode.

Teams Vdi policies can be configured at the global and per-user scopes. The Get-CsTeamsVdiPolicy cmdlet enables you to return infomration about all the Vdi policies that have been configured for use in your organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsVdiPolicy
```

In Example 1, Get-CsTeamsVdiPolicy is called without any additional parameters; this returns a collection of all the teams meeting policies configured for use in your organization.

### Example 2
```powershell
PS C:\> Get-CsTeamsVdiPolicy -Identity SalesPolicy
```

In Example 2, Get-CsTeamsVdiPolicy is used to return the per-user meeting policy that has an Identity SalesPolicy. Because identites are unique, this command will never return more than one item.

### Example 3
```powershell
PS C:\> Get-CsTeamsVdiPolicy | where-Object {$_.VDI2Optimization -eq "Enabled"}
```

The preceding command returns a collection of all the meeting policies where the VDI2Optimization property is Enabled. To do this, Get-CsTeamsVdiPolicy is first called without any parameters in order to return a collection of all the policies configured for use in the organization. This collection is then piped to the Where-Object cmdlet, which selects only those policies where the VDI2Optimization property is equal to Enabled.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

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
Unique identifier of the policy to be returned. To refer to the global policy, use this syntax: -Identity global. To refer to a per-user policy, use syntax similar to this: -Identity SalesDepartmentPolicy. If this parameter is omitted, then all the meeting policies configured for use in your organization will be returned.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### TeamsVdiPolicy.Cmdlets.TeamsVdiPolicy

## NOTES

## RELATED LINKS
