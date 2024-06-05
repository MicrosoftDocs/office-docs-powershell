---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csteamsupdatemanagementPolicy
applicable: Skype for Business Online
title: Get-CsTeamsUpdateManagementPolicy
schema: 2.0.0
manager: gnamun
ms.author: vargasj
author: vargasj
ms.reviewer:
---

# Get-CsTeamsUpdateManagementPolicy

## SYNOPSIS

Use this cmdlet to retrieve the current Teams Update Management policies in the organization.

## SYNTAX

```
Get-CsTeamsUpdateManagementPolicy [[-Identity] <Object>]
```

## DESCRIPTION
Retrieves the current Teams Update Management policies in the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsUpdateManagementPolicy
```

In this example, we retrieve all the existing Teams Update Management policies in the organization.

## PARAMETERS

### -Identity
The unique identifier of the policy.

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
