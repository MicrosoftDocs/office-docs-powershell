---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/Remove-SPOTenantOrgRelation
applicable: SharePoint Online
title: Remove-SPOTenantOrgRelation
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---
# Remove-SPOTenantOrgRelation

## SYNOPSIS

Note: Currently this cmdlet is part of pre-release functionality and may not function in your tenant.

## SYNTAX

```powershell
Remove-SPOTenantOrgRelation [-Scenario] <OrgRelationScenario> [-PartnerRole] <OrgRelationRole> [-PartnerCompanyId] <Guid> [-PartnerInstanceId <Guid>] [<CommonParameters>]
```

## DESCRIPTION

{{ Fill in the Description }}

## EXAMPLES

### Example 1

```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -PartnerCompanyId

{{ Fill PartnerCompanyId Description }}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PartnerInstanceId

{{ Fill PartnerInstanceId Description }}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PartnerRole

{{ Fill PartnerRole Description }}

```yaml
Type: OrgRelationRole
Parameter Sets: (All)
Aliases:
Accepted values: None, Source, Target

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scenario

{{ Fill Scenario Description }}

```yaml
Type: OrgRelationScenario
Parameter Sets: (All)
Aliases:
Accepted values: None, MnA

Required: True
Position: 0
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
