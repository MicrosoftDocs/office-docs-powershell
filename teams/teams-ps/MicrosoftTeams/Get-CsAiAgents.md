---
applicable: Microsoft Teams
author: radubulboaca
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: gauravpa
Module Name: MicrosoftTeams
ms.author: radubulboaca
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csaiagents
schema: 2.0.0
title: Get-CsAiAgents
---
# Get-CsAiAgents

## SYNOPSIS

Retrieves the AI Agents in the tenant that match with the ProviderId.

## SYNTAX

```
Get-CsAiAgents -ProviderId <string> [-IsTeamsIvrEnabled] 
```

## DESCRIPTION

> [!NOTE]
> This cmdlet will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.

The Get-CsAiAgents cmdlet returns a list of all AI Agents in the tenant.

## EXAMPLES

### Example 1 - Get AI agents from a provider

This example gets the AI Agents from ProviderId "9d8f559b-5de4-46a4-902a-ad4271e83efa" that are compatible with Teams Interactive Voice Response (IVR). The output of the Get-CsAiAgents cmdlet is a list of AI Agents, with parameters such as `BotHandle`, `MsaAppId`, `MsaAppTenantId` and more.

```powershell
Get-CsAiAgents -IsTeamsIvrEnabled -ProviderId "9d8f559b-5de4-46a4-902a-ad4271e83efa"
```

```Output
BotHandle                            CallingApiVersion Channel   Cid IsTeamsIvrEnabled IsTeamsVoiceEnabled MessagingApiVersion MsaAppId                             MsaAppTenantId                       ProviderId                           PublishState
---------                            ----------------- -------   --- ----------------- ------------------- ------------------- --------                             --------------                       ----------                           ------------
8a1b2c33-4d55-4f1e-9a2b-7f4b3a2b1c7e                   {msteams} 0   True              True                3                   c91e0a62-8d9e-4d6d-9e55-2a0b7b9f3d64 1bdf0cd6-a880-43c0-adde-ebf94070c03d 9d8f559b-5de4-46a4-902a-ad4271e83efa Preview
e5f7a913-0c2f-4f3a-8f69-9d1b40e2a3f1                   {msteams} 0   True              True                3                   6b4a3fb2-0df5-47a8-8a77-4f1d8f6e2a39 1bdf0cd6-a880-43c0-adde-ebf94070c03d 9d8f559b-5de4-46a4-902a-ad4271e83efa Preview
1a2b3c4d-5e6f-4711-8a2b-9c0d1e2f3a4b                   {msteams} 0   True              True                3                   4f0c1a2e-7b9d-4c1e-9123-6a7b8c9d0e1f 1bdf0cd6-a880-43c0-adde-ebf94070c03d 9d8f559b-5de4-46a4-902a-ad4271e83efa Preview
9f8e7d6c-5b4a-4312-9a0b-d1c2e3f4a5b6                   {msteams} 0   True              True                3                   a7c8d9e0-1f2a-4b3c-9d0e-1a2b3c4d5e6f 1bdf0cd6-a880-43c0-adde-ebf94070c03d 9d8f559b-5de4-46a4-902a-ad4271e83efa Preview
0a9b8c7d-6e5f-4d3c-8b7a-6c5d4e3f2a1b                   {msteams} 0   True              True                3                   d2e3f4a5-b6c7-4819-9f0e-a1b2c3d4e5f6 1bdf0cd6-a880-43c0-adde-ebf94070c03d 9d8f559b-5de4-46a4-902a-ad4271e83efa Preview
3b2c1d0e-9f8a-47b6-9123-4a5b6c7d8e9f                   {msteams} 0   True              True                3                   12ab34cd-56ef-4789-90ab-cdef12345678 1bdf0cd6-a880-43c0-adde-ebf94070c03d 9d8f559b-5de4-46a4-902a-ad4271e83efa Preview
7c6d5e4f-3a2b-41c0-9f8e-7d6c5b4a3f2e                   {msteams} 0   True              True                3                   f0e1d2c3-b4a5-4698-8f7e-6d5c4b3a2f1e 1bdf0cd6-a880-43c0-adde-ebf94070c03d 9d8f559b-5de4-46a4-902a-ad4271e83efa Preview
```

### Example 2 - Get AI agents from multiple providers

This example gets the AI Agents from multiple ProviderIds that are compatible with Teams Interactive Voice Response (IVR).

```powershell
Get-CsAiAgents -IsTeamsIvrEnabled -ProviderId "9d8f559b-5de4-46a4-902a-ad4271e83efa,905de543-6cf8-44a4-ab05-83bcd500f39e"
```

## PARAMETERS

### -ProviderId

A filter for ProviderId 

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsTeamsIvrEnabled

Optional parameter. If specified, it filters the returned results to AI Agents that are compatible with Teams Interactive Voice Response (IVR).

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutBuffer, -OutVariable, -PipelineVariable,
-ProgressAction, -Verbose, -WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IAiAgentQueryResult

## NOTES

## RELATED LINKS
