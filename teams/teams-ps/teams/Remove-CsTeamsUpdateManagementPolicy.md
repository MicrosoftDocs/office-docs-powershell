---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csteamsupdatemanagementPolicy
applicable: Skype for Business Online
title: Grant-CsTeamsUpdateManagementPolicy
schema: 2.0.0
manager: gnamun
ms.author: vargasj
author: vargasj
ms.reviewer:
---

# Grant-CsTeamsUpdateManagementPolicy

## SYNOPSIS

Use this cmdlet to remove a Teams Update Management policy from the tenant.

## SYNTAX

```
Grant-CsTeamsUpdateManagementPolicy [-WhatIf] [-Confirm] [[-Identity] <Object>] [-Tenant <Object>] [-Force]
```

## DESCRIPTION
Removes a Teams Update Management policy from the tenant.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsUpdateManagementPolicy -Identity "Campaign Policy"
```

In this example, the policy "Campaign Policy" is being removed.

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
The identity of the policy to be removed.

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
