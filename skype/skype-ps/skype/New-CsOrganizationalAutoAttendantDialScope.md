---
external help file: 
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendantDialScope
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantDialScope

## SYNOPSIS
Use New-CsOrganizationalAutoAttendantDialScope cmdlet to create dial-scopes for use with Organizational Auto Attendant (OAA) service.

## SYNTAX

```
New-CsOrganizationalAutoAttendantDialScope [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force]
 [-GroupIds <Object>] [-GroupScope] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new dial-scope to be used with Organizational Auto Attendant (OAA) service. OAAs use dial-scopes to restrict the scope of call transfers that can be made through directory lookup feature. 

Note: The returned dial-scope model composes a member for the underlying type/implementation. E.g. in case of the group-based dial scope, in order to modify its Group Ids you can access them through DialScope.GroupScope.GroupIds.  


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$groupIds = @("00000000-0000-0000-0000-000000000000")
$dialScope = New-CsOrganizationalAutoAttendantDialScope -GroupScope -GroupIds $groupIds
```

In Example 1, the New-CsOrganizationalAutoAttendantDialScope cmdlet is used to create a dial-scope with a group whose id is 00000000-0000-0000-0000-000000000000.

## PARAMETERS

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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

### -DomainController
PARAMVALUE: Microsoft.Rtc.Management.Deploy.Fqdn

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
PARAMVALUE: System.Management.Automation.SwitchParameter


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

### -GroupIds
PARAMVALUE: System.Collections.Generic.List

Refers to the ids of the groups that are to be included in the dial-scope.

Group ids can be obtained by using the Find-CsGroup cmdlet. 

This parameter becomes mandatory when GroupScope parameter is specified.


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

### -GroupScope
PARAMVALUE: System.Management.Automation.SwitchParameter

Indicates that a dial-scope based on groups (distribution lists, security groups) is to be created.


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
{{Fill Tenant Description}}

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.DialScope


## NOTES

## RELATED LINKS

